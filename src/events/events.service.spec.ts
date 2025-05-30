import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventsService } from './events.service';
import { Event } from './event.entity';
import { NotFoundException } from '@nestjs/common';

describe('EventsService', () => {
  let service: EventsService;
  let repository: Repository<Event>;

  const mockEvent = {
    id: 1,
    title: 'Test Event',
    shortDescription: 'Test Description',
    category: 'Test Category',
    description: 'Full Test Description',
    imageUrl: 'test.jpg',
    time: '10:00',
    date: '2024-03-20',
  };

  const mockRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EventsService,
        {
          provide: getRepositoryToken(Event),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<EventsService>(EventsService);
    repository = module.get<Repository<Event>>(getRepositoryToken(Event));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of events', async () => {
      mockRepository.find.mockResolvedValue([mockEvent]);
      const result = await service.findAll();
      expect(result).toEqual([mockEvent]);
      expect(mockRepository.find).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single event', async () => {
      mockRepository.findOne.mockResolvedValue(mockEvent);
      const result = await service.findOne(1);
      expect(result).toEqual(mockEvent);
      expect(mockRepository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
    });

    it('should throw NotFoundException when event is not found', async () => {
      mockRepository.findOne.mockResolvedValue(null);
      await expect(service.findOne(999)).rejects.toThrow(NotFoundException);
    });
  });

  describe('create', () => {
    it('should create and return a new event', async () => {
      const createDto = { ...mockEvent };
      delete createDto.id;

      mockRepository.create.mockReturnValue(mockEvent);
      mockRepository.save.mockResolvedValue(mockEvent);

      const result = await service.create(createDto);
      expect(result).toEqual(mockEvent);
      expect(mockRepository.create).toHaveBeenCalledWith(createDto);
      expect(mockRepository.save).toHaveBeenCalled();
    });
  });

  describe('update', () => {
    it('should update and return the event', async () => {
      const updateDto = { title: 'Updated Title' };
      const updatedEvent = { ...mockEvent, ...updateDto };

      mockRepository.findOne.mockResolvedValue(mockEvent);
      mockRepository.save.mockResolvedValue(updatedEvent);

      const result = await service.update(1, updateDto);
      expect(result).toEqual(updatedEvent);
      expect(mockRepository.save).toHaveBeenCalled();
    });

    it('should throw NotFoundException when updating non-existent event', async () => {
      mockRepository.findOne.mockResolvedValue(null);
      await expect(service.update(999, { title: 'New Title' })).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('remove', () => {
    it('should remove the event', async () => {
      mockRepository.findOne.mockResolvedValue(mockEvent);
      mockRepository.remove.mockResolvedValue(mockEvent);

      await service.remove(1);
      expect(mockRepository.remove).toHaveBeenCalledWith(mockEvent);
    });

    it('should throw NotFoundException when removing non-existent event', async () => {
      mockRepository.findOne.mockResolvedValue(null);
      await expect(service.remove(999)).rejects.toThrow(NotFoundException);
    });
  });
});
