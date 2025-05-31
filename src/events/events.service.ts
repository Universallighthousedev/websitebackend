import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';
import { CreateEventDto } from './dto/create-events.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventRepo: Repository<Event>,
  ) {}

  async findAll(): Promise<Event[]> {
    try {
      return await this.eventRepo.find();
    } catch (error) {
      console.error('Events findAll error:', error);
      throw new Error(
        'Failed to fetch events: ' +
          (error instanceof Error ? error.message : 'Unknown error'),
      );
    }
  }

  async findOne(id: string): Promise<Event> {
    const event = await this.eventRepo.findOne({ where: { id } });
    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }
    return event;
  }

  create(data: CreateEventDto): Promise<Event> {
    const event = this.eventRepo.create({
      ...data,
      date: new Date(data.date),
      endTime: data.endTime ? new Date(data.endTime) : undefined,
    });
    return this.eventRepo.save(event);
  }

  async update(id: string, data: UpdateEventDto): Promise<Event> {
    const event = await this.findOne(id);

    // Handle each field individually to avoid type issues
    if (data.title) event.title = data.title;
    if (data.description) event.description = data.description;
    if (data.location) event.location = data.location;
    if (data.imageUrl !== undefined) event.imageUrl = data.imageUrl;
    if (data.date) event.date = new Date(data.date);
    if (data.endTime) (event as any).endTime = new Date(data.endTime);

    return this.eventRepo.save(event);
  }

  async remove(id: string): Promise<void> {
    const event = await this.findOne(id);
    await this.eventRepo.remove(event);
  }
}
