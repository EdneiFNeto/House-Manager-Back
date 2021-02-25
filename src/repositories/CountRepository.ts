import AppError from '@errors/AppError';
import { ICountDto } from '@repositories/dto/ICountDto';
import { getRepository, Repository } from 'typeorm';
import Count from '@entities/Count';
import { ICountRepository } from './interfaces/ICountRepository';

export default class CountRepository implements ICountRepository {
  private ormRepository: Repository<Count>

  constructor() {
    this.ormRepository = getRepository(Count);
  }

  public async updateCount(dto: ICountDto): Promise<void> {
    const { status, id } = dto;

    const cheExists = await this.ormRepository.findOne({ where: { id } });
    if (!cheExists) {
      throw new AppError('Not exists count', 400);
    }

    await this.ormRepository.update(id, { status });
  }

  public async index(): Promise<Count[]> {
    const counts = await this.ormRepository.find({ relations: ['user'] });
    return counts;
  }

  public async createCount(dto: ICountDto): Promise<Count> {
    const createCount = await this.ormRepository.create(dto);
    await this.ormRepository.save(createCount);
    return createCount;
  }

  public async show(id: string): Promise<Count[]> {
    const counts = await this.ormRepository.find({
      where: { user_id: id }, relations: ['user'],
    });
    return counts;
  }

  public async deleteCount(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
