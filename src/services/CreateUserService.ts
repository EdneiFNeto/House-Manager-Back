import User from '@entities/User';
import AppError from '@errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '@repositories/interfaces/IUsersRepository';
import { hash } from 'bcryptjs';

interface IRequest {
  name,
  email,
  password
}

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UserRepository')
    private iUserRepository: IUserRepository,
  ) {}

  public async execute({ name, email, password }: IRequest): Promise<User> {
    const checkEmail = await this.iUserRepository.findBtEmail(email);
    if (checkEmail) {
      throw new AppError('Email is exists');
    }

    const hashPassword = await hash(password, 8);
    const createUser = await this.iUserRepository.createUser({
      name,
      email,
      password: hashPassword,
    });
    return createUser;
  }

  public async all(): Promise<User[]> {
    const users = await this.iUserRepository.all();
    return users;
  }

  public async show(id: string): Promise<User> {
    const users = await this.iUserRepository.show(id);
    return users;
  }
}
