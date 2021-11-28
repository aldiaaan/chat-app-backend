import { ErrorRequestHandler } from 'express';
import { ClientError } from '@/errors';

// eslint-disable-next-line max-params
export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  const isErrorSafeForClient = error instanceof ClientError;

  if (isErrorSafeForClient) {
    res.status(error.status).send(error.toJSON());
  } else {
    res.status(500).send({
      message: 'Something went wrong.',
      code: 'INTERNAL_ERROR',
      errors: [],
    });
  }
};
