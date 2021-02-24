import { Router } from 'express';
import CountController from '@controllers/CountController';

const countController = new CountController();

const coutReoutes = Router();
coutReoutes.post('/counts', countController.create);
coutReoutes.get('/counts', countController.index);
coutReoutes.get('/counts/user/:id', countController.show);
coutReoutes.put('/counts/:id', countController.update);
coutReoutes.delete('/counts/:id', countController.delete);

export default coutReoutes;
