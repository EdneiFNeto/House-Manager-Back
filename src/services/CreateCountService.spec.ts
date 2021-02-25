import { ICountDto } from '@repositories/dto/ICountDto';
import 'reflect-metadata';

import Service from '@services/CreateCountService';
import FackCountsRepository from '@repositories/fakes/FackCountsRepository';

function createMok(): ICountDto {
  return {
    user_id: '12345-1233',
    type_id: '342-123',
    value: 100.0,
    status: false,
    discount: 100.0 * 0.5,
    register_date: '2021-02-24',
  };
}

const createSut = () => {
  const fakeRepository = new FackCountsRepository();
  const sut = new Service(fakeRepository);
  return { sut };
};

describe('CreateCount', () => {
  it('showld be able to create a new Cout', async () => {
    const { sut } = createSut();
    const count = await sut.execute(createMok());
    expect(count.user_id).toBe('12345-1233');
  });

  it('showld  counts witch one user', async () => {
    const { sut } = createSut();
    const countMok = createMok();
    const countSut = await sut.execute(countMok);
    const counts = await sut.show(countMok.user_id);
    expect(counts).toEqual([countSut]);
  });

  it('showld all counts', async () => {
    const { sut } = createSut();
    const countSut = await sut.execute(createMok());
    const counts = await sut.index();
    expect(counts).toEqual([countSut]);
  });

  it('showld update count', async () => {
    const { sut } = createSut();
    await sut.execute(createMok());
    const newMok = {
      user_id: '12345-1233',
      type_id: '342-123',
      value: 100.0,
      discount: 100.0 * 0.5,
      status: false,
      register_date: '2021-02-24',
    };

    const counts = await sut.update(newMok);
    expect(counts).toBe(undefined);
  });
});
