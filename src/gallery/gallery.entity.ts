import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Gallery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  src: string;

  @Column()
  alt: string;

  @Column()
  title: string;

  @Column()
  description: string;
}
