import 'reflect-metadata';

import AppError from '@errors/AppError';
import CreateUserService from '@services/CreateUserService';
import FackUserRepository from '@repositories/fakes/FackUsertRepository';

const createUserMok = () => ({ name: 'Ednei', email: 'ed@gmail.com', password: '123456' });

const createSut = () => {
  const fackUserRepository = new FackUserRepository();
  const sut = new CreateUserService(fackUserRepository);
  return { sut };
};

describe('CreateUser', () => {
  it('showld be able to create a new User', async () => {
    const fackUserRepository = new FackUserRepository();
    const createUser = new CreateUserService(fackUserRepository);
    const user = await createUser.execute(createUserMok());
    expect(user.email).toBe('ed@gmail.com');
  });

  it('showld not be able create a new whit soma email from another', async () => {
    const { sut } = createSut();
    const userMok = createUserMok();
    await sut.execute(userMok);
    expect(sut.execute(userMok)).rejects.toBeInstanceOf(AppError);
  });

  it('showld lista all users', async () => {
    const { sut } = createSut();
    await sut.execute(createUserMok());
    const users = await sut.all();
    expect(users.length).toBe(1);
  });
});
