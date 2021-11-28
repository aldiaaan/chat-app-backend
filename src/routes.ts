import { Express } from 'express';

export const attachRoutes = (app: Express) => {
  app.get('/ping', (_req, res) => res.send('pong'));
};
