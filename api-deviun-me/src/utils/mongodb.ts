import JustMongo from 'just-mongo';
import config from '../../config';
import log from'./log';
import { schemas, collections } from './mongo-schemas/index';

let {
  host,
  db,
} = config.mongodb;

export const mongodb = new JustMongo({
  models: schemas,
  db,
  host,
}, (err: Error) => {
  if (err) {
    return log.error('Err mongodb connection', err);
  }

  log.info('');
});

export const collectionNames = collections;
