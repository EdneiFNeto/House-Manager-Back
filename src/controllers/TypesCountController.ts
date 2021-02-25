import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateTypesCountService from '@services/CreateTypesCountService';

export default class TypesCountController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const service = container.resolve(CreateTypesCountService);
      const typeCounts = await service.execute(request.body);
      return response.status(201).json(typeCounts);
    } catch (error) {
      return response.status(500).json({ error: `${error.message}` });
    }
  }

  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const service = container.resolve(CreateTypesCountService);
      const typeCounts = await service.all();
      return response.status(200).json(typeCounts);
    } catch (error) {
      return response.status(500).json({ error: `${error.message}` });
    }
  }
}
