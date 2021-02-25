import { ICountDto } from '@repositories/dto/ICountDto';
import Count from '@entities/Count';
import { inject, injectable } from 'tsyringe';
import { ICountRepository } from '@repositories/interfaces/ICountRepository';

interface IRequest {
  user_id: string;
  type_id: string;
  value: number;
  discount: number;
  status: boolean;
  register_date: string;
}

@injectable()
export default class CreateCountService {
  constructor(
    @inject('CountRepository')
    private iCountRepository: ICountRepository,
  ) {}

  public async execute({
    user_id, type_id, value, register_date, discount,
  }: IRequest): Promise<Count> {
    const createCount = await this.iCountRepository.createCount({
      user_id,
      type_id,
      value,
      discount,
      status: false,
      register_date: register_date || String(new Date()),
    });
    return createCount;
  }

  public async show(id: string): Promise<Count[]> {
    const createCount = await this.iCountRepository.show(id);
    return createCount;
  }

  public async index(): Promise<Count[]> {
    const createCount = await this.iCountRepository.index();
    return createCount;
  }

  public async update(dto: ICountDto): Promise<void> {
    await this.iCountRepository.updateCount(dto);
  }

  public async delete(id: string): Promise<void> {
    await this.iCountRepository.deleteCount(id);
  }
}
