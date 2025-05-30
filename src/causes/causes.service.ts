import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cause } from './cause.entity';
import { CauseImage } from './entities/cause-image.entity';
import { CreateCauseDto } from './dto/create-cause.dto';
import { UpdateCauseDto } from './dto/update-cause.dto';

@Injectable()
export class CausesService {
  constructor(
    @InjectRepository(Cause)
    private causesRepository: Repository<Cause>,
    @InjectRepository(CauseImage)
    private causeImagesRepository: Repository<CauseImage>,
  ) {}

  async create(createCauseDto: CreateCauseDto): Promise<Cause> {
    try {
      const cause = this.causesRepository.create({
        title: createCauseDto.title,
        goal: createCauseDto.goal,
        category: createCauseDto.category,
        description: createCauseDto.description,
      });

      const savedCause = await this.causesRepository.save(cause);

      if (createCauseDto.images && createCauseDto.images.length > 0) {
        const images = createCauseDto.images.map((imageDto) => {
          const image = new CauseImage();
          image.url = imageDto.url;
          image.alt = imageDto.alt || null;
          image.cause = savedCause;
          return image;
        });

        await this.causeImagesRepository.save(images);
      }

      return this.findOne(savedCause.id);
    } catch (error) {
      throw new BadRequestException('Failed to create cause: ' + error.message);
    }
  }

  async findAll(): Promise<Cause[]> {
    try {
      return await this.causesRepository.find({
        order: {
          createdAt: 'DESC',
        },
      });
    } catch (error) {
      throw new BadRequestException('Failed to fetch causes: ' + error.message);
    }
  }

  async findOne(id: string): Promise<Cause> {
    try {
      const cause = await this.causesRepository.findOne({
        where: { id },
        relations: ['images'],
      });

      if (!cause) {
        throw new NotFoundException(`Cause with ID ${id} not found`);
      }

      return cause;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Failed to fetch cause: ' + error.message);
    }
  }

  async update(id: string, updateCauseDto: UpdateCauseDto): Promise<Cause> {
    try {
      const cause = await this.findOne(id);

      // Update basic cause properties
      Object.assign(cause, {
        title: updateCauseDto.title,
        goal: updateCauseDto.goal,
        category: updateCauseDto.category,
        description: updateCauseDto.description,
      });

      // Handle images update if provided
      if (updateCauseDto.images) {
        // Remove existing images
        await this.causeImagesRepository.delete({ cause: { id } });

        // Create new images
        const images = updateCauseDto.images.map((imageDto) => {
          const image = new CauseImage();
          image.url = imageDto.url;
          image.alt = imageDto.alt || null;
          image.cause = cause;
          return image;
        });

        await this.causeImagesRepository.save(images);
      }

      return await this.causesRepository.save(cause);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Failed to update cause: ' + error.message);
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const cause = await this.findOne(id);
      await this.causesRepository.remove(cause);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Failed to delete cause: ' + error.message);
    }
  }
}
