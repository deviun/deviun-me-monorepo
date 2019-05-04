import { Response, Request, NextFunction } from 'express';
import config from '../../config';
import log from '../utils/log';

const adminToken = config.admin.token;

export const adminOnly = async (req: Request, res: Response, next: NextFunction) => {
  const {
    token,
  } = req.headers;

  if (token !== adminToken) {
    log.warn('access denied', token, req.method, req.path, req.headers, req.body);
    return res.status(403).end('access denied');
  }

  next();
};
