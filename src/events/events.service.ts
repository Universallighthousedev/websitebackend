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

  findAll(): Promise<Event[]> {
    return this.eventRepo.find();
  }

  async findOne(id: number): Promise<Event> {
    const event = await this.eventRepo.findOne({ where: { id } });
    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }
    return event;
  }

  create(data: CreateEventDto): Promise<Event> {
    const event = this.eventRepo.create(data as Partial<Event>);
    return this.eventRepo.save(event);
  }

  async update(id: number, data: UpdateEventDto): Promise<Event> {
    const event = await this.findOne(id);
    Object.assign(event, data);
    return this.eventRepo.save(event);
  }

  async remove(id: number): Promise<void> {
    const event = await this.findOne(id);
    await this.eventRepo.remove(event);
  }
}
