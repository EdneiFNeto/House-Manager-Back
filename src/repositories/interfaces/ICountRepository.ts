import { ICountDto } from '@repositories/dto/ICountDto';
import Count from '@entities/Count';

export interface ICountRepository {
  createCount(dto: ICountDto): Promise<Count>;
  show(user_id: string): Promise<Count[]>;
  index(): Promise<Count[]>;
  updateCount(dto: ICountDto): Promise<void>;
  deleteCount(id: string): Promise<void>;
}
