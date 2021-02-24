import { Router } from 'express';
import UserController from '@controllers/UsersController';

const userController = new UserController();

const userRoutes = Router();
userRoutes.post('/users', userController.create);
userRoutes.get('/users', userController.index);

export default userRoutes;
