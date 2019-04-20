import { Express, Request, Response } from 'express';

export function handler(req: Request, res: Response) {
  return res.end('So good!');
}

export function factory(app: Express) {
  app.all('/test', handler);
}
