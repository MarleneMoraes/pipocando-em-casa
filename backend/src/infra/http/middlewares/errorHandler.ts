import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../../shared/errors/AppError';

export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message
    });
  }

  console.error(error);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error'
  });
}