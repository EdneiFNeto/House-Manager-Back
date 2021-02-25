import { Router } from 'express';
import TypesCountController from '@controllers/TypesCountController';

const typesCountController = new TypesCountController();

const typesCountRoutes = Router();
typesCountRoutes.post('/types-count', typesCountController.create);
typesCountRoutes.get('/types-count', typesCountController.index);

export default typesCountRoutes;
