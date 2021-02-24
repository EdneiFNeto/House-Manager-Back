import { Request, Response } from 'express';
import AutService from '@services/AuthService';
import { container } from 'tsyringe';

export default class AuthController {
  public async auth(request: Request, response: Response): Promise<Response> {
    try {
      const service = container.resolve(AutService);
      const { user, token } = await service.execute(request.body);
      return response.status(200).json({ user, token });
    } catch (error) {
      return response.status(error.statusCode).json({ error: error.message || 'Internal error ' });
    }
  }
}
