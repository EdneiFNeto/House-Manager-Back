/* eslint-disable no-unused-vars */
import 'dotenv';
import 'reflect-metadata';
import 'express-async-errors';
import AppError from '@errors/AppError';
import express, { Request, Response, NextFunction } from 'express';

import cors from 'cors';
import routes from '@http/routes';

import 'database';
import '@container/index';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ status: 'error', message: err.message });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

const { APP_IP, APP_PORT } = process.env;
app.listen(3333, APP_IP, () => {
  console.log(`Server running at http://${APP_IP}:${APP_PORT}`);
});
