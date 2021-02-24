import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('types_counts')
export default class TypesCounts {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name: string;
}
