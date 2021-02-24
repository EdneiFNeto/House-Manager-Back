import { Router } from 'express';
import AuthController from '@controllers/AuthController';

const authController = new AuthController();

const sessionRoutes = Router();
sessionRoutes.post('/auth', authController.auth);

export default sessionRoutes;
