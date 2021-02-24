import 'reflect-metadata';

import AppError from '@errors/AppError';
import CreateTypesCountService from '@services/CreateTypesCountService';
import FakesTypesRepository from '@repositories/fakes/FakesTypesRepository';

const createMock = () => ({ name: 'Luz' });

const createSut = () => {
  const fackUserRepository = new FakesTypesRepository();
  const sut = new CreateTypesCountService(fackUserRepository);
  return { sut };
};

describe('CreateUser', () => {
  it('showld be able to create a new Type counts', async () => {
    const { sut } = createSut();
    const user = await sut.execute(createMock());
    expect(user.name).toBe('Luz');
  });

  it('showld not be able create a new type count whit verify is name is duplicate', async () => {
    const { sut } = createSut();
    const userMok = createMock();
    await sut.execute(userMok);
    expect(sut.execute(userMok)).rejects.toBeInstanceOf(AppError);
  });

  it('showld lista all types', async () => {
    const { sut } = createSut();
    await sut.execute(createMock());
    const users = await sut.all();
    expect(users.length).toBe(1);
  });
});
