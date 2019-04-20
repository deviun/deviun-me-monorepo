import { Express, Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import log from '../utils/log';
import { apiResponseError } from '../helpers/api-helper';

export function factory(app: Express) {
  app.use(bodyParser.json());
  app.use((err: Error, req: Request, res: Response, next: Function) => {
    if (err) {
      log.error('parse body err', err);
      return res.json(apiResponseError('invalid json body'));
    }

    return next();
  });
}

