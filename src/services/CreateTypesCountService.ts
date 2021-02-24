import TypesCounts from '@entities/TypesCounts';
import { inject, injectable } from 'tsyringe';
import AppError from '@errors/AppError';
import { ITypesCountRepository } from '../repositories/interfaces/ITypesCountRepository';

interface IRequest {
  name
}

@injectable()
export default class CreateTypesCountService {
  constructor(
    @inject('TypesCountRepository')
    private iTypesCountRepository: ITypesCountRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<TypesCounts> {
    const checkExistsName = await this.iTypesCountRepository.findTypeCount(name);
    if (checkExistsName) {
      throw new AppError('Count type is exists');
    }
    const createTypes = await this.iTypesCountRepository.createTypesCount({ name });
    return createTypes;
  }

  public async all(): Promise<TypesCounts[]> {
    const findTypesCount = await this.iTypesCountRepository.list();
    return findTypesCount;
  }
}
