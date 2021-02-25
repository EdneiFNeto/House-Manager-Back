import { Request, Response } from 'express';
import CreateCountService from '@services/CreateCountService';
import { container } from 'tsyringe';

export default class CountController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const {
        user_id, type_id, value, register_date, discount,
      } = request.body;
      const data = {
        user_id,
        type_id,
        value,
        discount,
        register_date,
        status: false,
      };

      const service = container.resolve(CreateCountService);
      const coutns = await service.execute(data);

      return response.status(201).json(coutns);
    } catch (error) {
      return response.status(500).json({ error: `${error}` });
    }
  }

  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const service = container.resolve(CreateCountService);
      const counts = await service.show(id);
      return response.status(200).json(counts);
    } catch (error) {
      return response.status(500).json({ error: `${error}` });
    }
  }

  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const service = container.resolve(CreateCountService);
      const counts = await service.index();
      return response.status(200).json(counts);
    } catch (error) {
      return response.status(500).json({ error: `${error}` });
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const {
        status, user_id, type_id, value, register_date,
      } = request.body;

      const { id } = request.params;
      const data = {
        status,
        user_id,
        type_id,
        value,
        discount: 0.0,
        id,
        register_date,
      };
      const service = container.resolve(CreateCountService);
      await service.update(data);
      return response.status(204).json();
    } catch (error) {
      return response.status(500).json({ error: `${error}` });
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const service = container.resolve(CreateCountService);
      const counts = await service.delete(id);
      return response.status(200).json(counts);
    } catch (error) {
      return response.status(500).json({ error: `${error}` });
    }
  }
}
