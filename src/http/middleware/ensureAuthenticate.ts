import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import AppError from '@errors/AppError';
import authConfig from '@config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  // Validação do token JWT
  const autHeader = request.headers.authorization;

  if (!autHeader) {
    throw new AppError('JWT not exists', 401);
  }

  const [, token] = autHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub } = decoded as TokenPayload;

    // Incluindo informação dentro do request
    // request.user = { id: sub }

    return next();
  } catch (error) {
    throw new AppError('Invalid JWT token', 401);
  }
}
