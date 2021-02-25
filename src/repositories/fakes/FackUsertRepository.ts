import User from '@entities/User';
import { IUserRepository } from '@repositories/interfaces/IUsersRepository';
import { uuid } from 'uuidv4';

export default class UserRepository implements IUserRepository {
  private users: User[] = [];

  public async findBtEmail(email: string): Promise<User> {
    const findUser = this.users.find((user) => user.email === email);
    return findUser;
  }

  public async createUser(user: User): Promise<User> {
    const u = new User();
    Object.assign(u, {
      id: uuid(), name: user.name, email: user.email, password: user.password,
    });

    this.users.push(u);
    return u;
  }

  public async all(): Promise<Array<User>> {
    return this.users;
  }

  public async show(id:string): Promise<User> {
    return this.users.filter((user) => user.id === id)[0];
  }
}
