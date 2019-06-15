import { Express, Request, Response } from 'express';
import * as cors from 'cors';

export function factory(app: Express) {
  app.use(cors());
}

