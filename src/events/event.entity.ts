import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number; // Auto-generated ID

  @Column()
  title: string;

  @Column()
  shortDescription: string;

  @Column()
  category: string;

  @Column()
  description: string;

  @Column()
  imageUrl: string;

  @Column()
  time: string;

  @Column({ type: 'date' })
  date: string; // Format: 'YYYY-MM-DD'
}
