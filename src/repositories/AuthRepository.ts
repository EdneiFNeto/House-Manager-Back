import { sign } from 'jsonwebtoken';
import authConfig from '@config/auth';

import User from '@entities/User';
import { Repository, getRepository } from 'typeorm';
import AppError from '@errors/AppError';
import { IAuthRepository, IToken } from './interfaces/IAuthRepository';

export default class AuthRepository implements IAuthRepository {
  private ormRepositopry: Repository<User>

  constructor() {
    this.ormRepositopry = getRepository(User);
  }

  public async auth(email: string): Promise<IToken> {
    const user = await this.ormRepositopry.findOne({ where: { email } });

    if (!user) {
      throw new AppError('Incorrent email/passowrd combination', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({}/* payload */, secret, {
      subject: user.id,
      expiresIn,
    });

    return { user, token };
  }
}
