import { inject, injectable } from 'tsyringe';
import { IAuthRepository, IToken } from '@repositories/interfaces/IAuthRepository';

interface IRequest {
  email:string;
  password:string;
}

@injectable()
export default class AuthService {
  constructor(
    @inject('AuthRepository')
    private iAuthRepository: IAuthRepository,
  ) {}

  public async execute({ email, password }: IRequest): Promise<IToken> {
    const { user, token } = await this.iAuthRepository.auth(email, password);
    return { user, token };
  }
}
