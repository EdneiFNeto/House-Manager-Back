import { Request, Response } from 'express';
import CreateUserService from '@services/CreateUserService';
import { container } from 'tsyringe';

export default class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const service = container.resolve(CreateUserService);
      const user = await service.execute(request.body);
      return response.status(201).json(user);
    } catch (error) {
      return response.status(500).json({ error: `${error.message}` });
    }
  }

  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const service = container.resolve(CreateUserService);
      const user = await service.all();
      return response.status(200).json(user);
    } catch (error) {
      return response.status(500).json({ error: `${error.message}` });
    }
  }
}
