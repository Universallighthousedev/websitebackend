import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Cause } from '../cause.entity';

@Entity('cause_images')
export class CauseImage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @Column({ type: 'varchar', nullable: true })
  alt: string | null;

  @Column({ default: 0 })
  order: number;

  @ManyToOne(() => Cause, (cause: Cause) => cause.images, {
    onDelete: 'CASCADE',
  })
  cause: Cause;

  @CreateDateColumn()
  createdAt: Date;
}
