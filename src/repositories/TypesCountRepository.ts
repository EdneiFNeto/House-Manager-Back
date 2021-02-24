import { getRepository, Repository } from 'typeorm';
import TypesCounts from '@entities/TypesCounts';
import { ITypesCountRepository } from './interfaces/ITypesCountRepository';
import { ITypesCountDto } from './dto/ITypesCountDto';

export default class TypesCountRepository implements ITypesCountRepository {
  private ormRepository: Repository<TypesCounts>

  constructor() {
    this.ormRepository = getRepository(TypesCounts);
  }

  public async findTypeCount(name: string): Promise<TypesCounts> {
    const type = await this.ormRepository.findOne({ where: { name } });
    return type;
  }

  public async createTypesCount(dto: ITypesCountDto): Promise<TypesCounts> {
    const types = await this.ormRepository.create(dto);
    await this.ormRepository.save(types);
    return types;
  }

  public async list(): Promise<TypesCounts[]> {
    const types = await this.ormRepository.find();
    return types;
  }
}
