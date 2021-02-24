import { IAuthRepository, IToken } from '@repositories/interfaces/IAuthRepository';
import User from '@entities/User';
import { uuid } from 'uuidv4';

export default class AuthRepository implements IAuthRepository {
  private users: User[] = [];

  public async auth(email: string): Promise<IToken> {
    let token: '12121';
    const user = this.getUser();
    this.users.push(user);
    const findUser = this.users.find((u) => u.email === email);
    return { user: findUser, token };
  }

  public getUser(): User {
    const user = new User();
    user.id = uuid();
    user.name = 'Ednei';
    user.email = 'ed@gmail.com';
    user.password = '123456';

    return user;
  }
}
