import TypesCounts from '@entities/TypesCounts';
import { ITypesCountDto } from '../dto/ITypesCountDto';

export interface ITypesCountRepository {
  createTypesCount(dto: ITypesCountDto): Promise<TypesCounts>;
  list(): Promise<TypesCounts[]>;
  findTypeCount(name: string): Promise<TypesCounts>
}
