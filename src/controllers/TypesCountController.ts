import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateTypesCountService from '@services/CreateTypesCountService';

export default class TypesCountController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const service = container.resolve(CreateTypesCountService);
      const user = await service.execute(request.body);
      return response.status(201).json(user);
    } catch (error) {
      return response.status(500).json({ error: `${error.message}` });
    }
  }
}
