import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './team.entity';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private teamRepo: Repository<Team>,
  ) {}

  findAll(): Promise<Team[]> {
    return this.teamRepo.find();
  }

  async findOne(id: string): Promise<Team> {
    const team = await this.teamRepo.findOne({ where: { id } });
    if (!team) {
      throw new NotFoundException(`Team member with ID ${id} not found`);
    }
    return team;
  }

  create(data: CreateTeamDto): Promise<Team> {
    const team = this.teamRepo.create(data);
    return this.teamRepo.save(team);
  }

  async update(id: string, data: UpdateTeamDto): Promise<Team> {
    const team = await this.findOne(id);
    Object.assign(team, data);
    return this.teamRepo.save(team);
  }

  async remove(id: string): Promise<void> {
    const team = await this.findOne(id);
    await this.teamRepo.remove(team);
  }
}
