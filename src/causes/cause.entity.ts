// src/causes/cause.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CauseImage } from './entities/cause-image.entity';
import { Donation } from '../donations/donation.entity';

@Entity('causes')
export class Cause {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  goal: number;

  @Column()
  category: string;

  @Column('text')
  description: string;

  @Column({ type: 'decimal', default: 0, precision: 12, scale: 2 })
  raised: number;

  @OneToMany(() => CauseImage, (image) => image.cause, {
    cascade: true,
    eager: true,
  })
  images: CauseImage[];

  @OneToMany(() => Donation, (donation) => donation.cause)
  donations: Donation[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
