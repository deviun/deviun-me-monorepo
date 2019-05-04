import { Express, Response, Request } from 'express';
import { celebrate, Joi } from 'celebrate';
import { apiResponseOK } from '../helpers/api-helper';
import ListsModel from '../models/lists';
import { adminOnly } from '../middlewares/admin-access';

const listIdValidation = celebrate({
  params: Joi.object().keys({
    listId: Joi.string().required(),
  }),
});

const itemIdValidation = celebrate({
  params: Joi.object().keys({
    listId: Joi.string().required(),
    itemId: Joi.string().required(),
  }),
});

const pushItem = async (req: Request, res: Response) => {
  const { listId } = req.params;
  const item = req.body;
  const result = await ListsModel.push(listId, item);

  return res.json(apiResponseOK(result));
};

const updateItem = async (req: Request, res: Response) => {
  const { listId, itemId } = req.params;
  const item = req.body;
  const result = await ListsModel.update(listId, itemId, item);

  return res.json(apiResponseOK(result));
};

const deleteItem = async (req: Request, res: Response) => {
  const { listId, itemId } = req.params;
  await ListsModel.delete(listId, itemId);

  return res.json(apiResponseOK(true));
};

const getList = async (req: Request, res: Response) => {
  const { listId } = req.params;
  const result = await ListsModel.getAll(listId);

  return res.json(apiResponseOK(result));
};

export function factory(app: Express) {
  const routeOne = app.route('/list/:listId');
  const routeTwo = app.route('/list/:listId/:itemId');

  routeOne.post(adminOnly, listIdValidation, pushItem);
  routeTwo.put(adminOnly, itemIdValidation, updateItem);
  routeTwo.delete(adminOnly, itemIdValidation, deleteItem);
  routeOne.get(listIdValidation, getList);
}
