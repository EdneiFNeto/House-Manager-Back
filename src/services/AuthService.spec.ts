import 'reflect-metadata';

import CreateAuthService from '@services/AuthService';
import FakesAuthRepository from '@repositories/fakes/FakesAuthRepository';

const createUserMok = () => ({ name: 'Ednei', email: 'ed@gmail.com', password: '123456' });

describe('AuthUser', () => {
  it('showld be able to auth User', async () => {
    const fakesAuthRepository = new FakesAuthRepository();
    const createUser = new CreateAuthService(fakesAuthRepository);
    const user = await createUser.execute(createUserMok());
    expect(user).toMatchObject({ token: undefined, user: { ...createUserMok() } });
  });
});
