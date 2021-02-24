import User from '@entities/User';
import AppError from '@errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '@repositories/interfaces/IUsersRepository';

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

    const createUser = await this.iUserRepository.createUser({ name, email, password });
    return createUser;
  }

  public async all(): Promise<User[]> {
    const users = await this.iUserRepository.all();
    return users;
  }
}
