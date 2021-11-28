import { Express } from 'express';

import * as MessagingController from './controllers/messaging';

export const attachRoutes = (app: Express) => {
  app.get('/ping', (_req, res) => res.send('pong'));

  app.post('/api/v1/register', MessagingController.registerToTopic);
  app.post('/api/v1/message/send', MessagingController.send);
};
