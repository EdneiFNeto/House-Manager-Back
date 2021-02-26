import User from '@entities/User';
import { IUserDto } from '../dto/IUserDTO';

export interface IUserRepository {
  findBtEmail(email: string): Promise<User| undefined>;
  createUser(user: IUserDto): Promise<User>;
  all(): Promise<User[]>;
  show(id: string): Promise<User>;
  update(dto: IUserDto): Promise<void>;
}
