import { Request, Response } from 'express';
import CreateUserService from '@services/CreateUserService';
import { container } from 'tsyringe';

export default class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const service = container.resolve(CreateUserService);
      const user = await service.execute(request.body);

      delete user.password;

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

  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const service = container.resolve(CreateUserService);
      const user = await service.show(id);
      return response.status(200).json(user);
    } catch (error) {
      return response.status(500).json({ error: `${error.message}` });
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { email, name, password } = request.body;
      const data = {
        email, name, password, id,
      };
      const service = container.resolve(CreateUserService);
      await service.update(data);
      return response.status(204).json();
    } catch (error) {
      return response.status(500).json({ error: `${error.message}` });
    }
  }
}
