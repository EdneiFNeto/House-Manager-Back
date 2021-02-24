import User from '@entities/User';

export interface IToken {
  token: string,
  user: User
}

export interface IAuthRepository {
  auth(email:string, password: string) : Promise<IToken>
}
