import { container } from 'tsyringe';

import { IUserRepository } from '@repositories/interfaces/IUsersRepository';
import UserRepository from '@repositories/UserRepository';

import { IAuthRepository } from '@repositories/interfaces/IAuthRepository';
import AuthRepository from '@repositories/AuthRepository';

import { ICountRepository } from '@repositories/interfaces/ICountRepository';
import CountRepository from '@repositories/CountRepository';

import { ITypesCountRepository } from '@repositories/interfaces/ITypesCountRepository';
import TypesCountRepository from '@repositories/TypesCountRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<IAuthRepository>('AuthRepository', AuthRepository);

container.registerSingleton<ICountRepository>('CountRepository', CountRepository);

container.registerSingleton<ITypesCountRepository>('TypesCountRepository', TypesCountRepository);
