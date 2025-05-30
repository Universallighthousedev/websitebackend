import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
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

  @Column()
  causeId: string;

  @ManyToOne(() => Cause, (cause: Cause) => cause.images, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'causeId' })
  cause: Cause;
}
