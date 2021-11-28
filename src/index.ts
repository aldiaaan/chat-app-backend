import 'dotenv/config';
import 'module-alias/register';

import express from 'express';
import { initalizeMongoDB, initializeExpress, initializeFirebaseAdmin } from './bootstrap';
import { log } from './logger';

const app = express();

const start = async () => {
  await Promise.all([initializeExpress(app), initalizeMongoDB(), initializeFirebaseAdmin()]);
};

start().then(() => log('all set!'));
