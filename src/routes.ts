import { Express } from 'express';
import * as MessagingController from './controllers/messaging';
import * as ImageController from './controllers/image';

import multer from 'multer';

const imageUploadHandler = multer({
  limits: { fieldSize: 10 * 1024 * 1024 },
}).fields([{ name: 'image', maxCount: 1 }]);

export const attachRoutes = (app: Express) => {
  app.get('/ping', (_req, res) => res.send('pong'));

  app.post('/api/v1/register', MessagingController.registerToTopic);
  app.post('/api/v1/message/send', MessagingController.send);

  app.post('/api/v1/image/upload', imageUploadHandler, ImageController.upload);
};
