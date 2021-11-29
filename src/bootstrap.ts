import express, { Express } from 'express';
import firebaseAdmin from 'firebase-admin';
import path from 'path';
import { RouteNotFoundError } from './errors/client';

import { log } from './logger';
import { errorHandler } from './middlewares';
import { attachRoutes } from './routes';

export const initializeFirebaseAdmin = async () => {
  log('connecting to firebase admin ...');

  await firebaseAdmin.initializeApp({
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    credential: firebaseAdmin.credential.cert(require(path.join(__dirname, 'firebase-admin-credential.json'))),
  });

  log('success connecting to firebase admin');

  return;
};

export const initializeExpress = async (app: Express) => {
  log('initializing express app ...');

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  attachRoutes(app);

  app.use((req, _res, next) => next(new RouteNotFoundError(req.originalUrl)));
  app.use(errorHandler);

  log('success initializing express app ');

  app.listen(process.env.PORT || process.env.APP_PORT || 8080);

  log(`app now listening on port ${process.env.PORT || process.env.APP_PORT || 8080}`);

  return true;
};
