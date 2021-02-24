import User from '@entities/User';
import TypesCounts from '@entities/TypesCounts';
import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('counts')
export default class Count {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column()
  type_id: string;

  @ManyToOne(() => TypesCounts, { eager: true })
  @JoinColumn({ name: 'type_id' })
  typeCount: TypesCounts

  @Column()
  value: number;

  @Column()
  status: boolean;

  @Column()
  register_date: string;

  @Column()
  created_at: string;
}
