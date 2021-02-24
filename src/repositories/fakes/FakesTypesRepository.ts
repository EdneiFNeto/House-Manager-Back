import TypesCounts from '@entities/TypesCounts';
import { ITypesCountRepository } from '@repositories/interfaces/ITypesCountRepository';
import { uuid } from 'uuidv4';
import { ITypesCountDto } from '@repositories/dto/ITypesCountDto';

export default class TypesCountRepository implements ITypesCountRepository {
  private types: TypesCounts[] = [];

  public async createTypesCount(dto: ITypesCountDto): Promise<TypesCounts> {
    const type = new TypesCounts();
    Object.assign(type, {
      id: uuid(), name: dto.name,
    });

    this.types.push(type);
    return type;
  }

  public async list(): Promise<TypesCounts[]> {
    return this.types;
  }

  public async findTypeCount(name: string): Promise<TypesCounts> {
    const findTypes = this.types.filter((type) => type.name === name);
    return findTypes[0];
  }
}
