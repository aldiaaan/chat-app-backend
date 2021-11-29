import 'dotenv/config';
import 'module-alias/register';

import express from 'express';
import { initializeExpress, initializeFirebaseAdmin } from './bootstrap';
import { log } from './logger';

const app = express();

const start = async () => {
  await Promise.all([initializeExpress(app), initializeFirebaseAdmin()]);
};

start().then(() => log('all set!'));
