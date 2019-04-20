import * as express from 'express';
import { errors } from 'celebrate';
import config from '../config/index';
import log from './utils/log';
import middlewares from './middlewares';
import handlers from './handlers';

const PORT = config.server.port;

const app = express();

middlewares.forEach((middleware) => {
  middleware(app);
});

handlers.forEach((handler) => {
  handler(app);
});

app.use(errors());

app.listen(PORT, () => {
  log.info(`Server started on ${PORT} port!`);
});
