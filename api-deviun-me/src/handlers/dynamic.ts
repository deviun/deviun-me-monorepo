import { Express, Response, Request } from 'express';
import { celebrate, Joi } from 'celebrate';
import { apiResponseOK, apiResponseError } from '../helpers/api-helper';
import log from '../utils/log';

import playlistsStatsHandler from './dynamic-handlers/playlists-stats';

const dynamicHandlers = {
  playlistsStats: playlistsStatsHandler,
};

const handleDynamic = async (req: Request, res: Response) => {
  const { id } = req.params;
  let result;

  if (!dynamicHandlers[id]) {
    return res.json(apiResponseError('invalid handler id'));
  }

  try {
    result = await dynamicHandlers[id]();
  } catch (err) {
    log.error('error on dynamic', id, err);
    return res.json(apiResponseError('unknown error'));
  }

  return res.json(apiResponseOK(result));
};

const idValidation = celebrate({
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
});

export function factory(app: Express) {
  const route = app.route('/dynamic/:id?');

  route.get(idValidation, handleDynamic);
}
