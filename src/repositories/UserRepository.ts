import { getRepository, Repository } from 'typeorm';
import User from '@entities/User';
import { IUserRepository } from './interfaces/IUsersRepository';

export default class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>

  constructor() {
    // cria repository
    this.ormRepository = getRepository(User);
  }

  public async findBtEmail(email: string): Promise<User> {
    const user = await this.ormRepository.findOne({ where: { email } });
    return user;
  }

  public async createUser(user: User): Promise<User> {
    const users = await this.ormRepository.create(user);
    await this.ormRepository.save(users);
    return users;
  }

  public async all(): Promise<Array<User>> {
    const users = await this.ormRepository.find();
    return users;
  }

  public async show(id: string): Promise<User> {
    const users = await this.ormRepository.findOne({ where: { id } });
    return users;
  }
}
