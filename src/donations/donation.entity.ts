import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Cause } from '../causes/cause.entity';

@Entity('donations')
export class Donation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  amount: number;

  @Column({ nullable: true })
  donorName: string;

  @Column({ nullable: true })
  donorEmail: string;

  @ManyToOne(() => Cause, (cause) => cause.id, { onDelete: 'CASCADE' })
  cause: Cause;

  @CreateDateColumn()
  createdAt: Date;
}
