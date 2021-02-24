import Count from '@entities/Count';
import { ICountDto } from '@repositories/dto/ICountDto';
import { uuid } from 'uuidv4';
import { ICountRepository } from '../interfaces/ICountRepository';

export default class CountRepository implements ICountRepository {
  private counts: Count[] = [];

  public async createCount(dto: ICountDto): Promise<Count> {
    const c = new Count();
    Object.assign(c, {
      id: uuid(),
      user_id: dto.user_id,
      type_id: dto.type_id,
      value: dto.value,
      register_date: dto.register_date,
    });

    this.counts.push(c);
    return c;
  }

  public async show(id: string): Promise<Count[]> {
    const findCounts = this.counts.filter((count) => count.user_id === id);
    return findCounts;
  }

  public async index(): Promise<Count[]> {
    const findCounts = this.counts;
    return findCounts;
  }

  public async updateCount(dto: ICountDto): Promise<void> {
    const { status } = dto;
    const findCount = this.counts.filter((count) => count.id === dto.id);
    findCount.forEach((count, index) => {
      findCount[index].status = status;
    });
  }

  public async deleteCount(dto: ICountDto): Promise<void> {
    const item = this.counts.map((count) => count.id === dto.id);
    const index = item.indexOf(item[0]);
    this.counts.splice(index, -1);
  }
}
