import { Express, Response, Request } from 'express';
import { celebrate, Joi } from 'celebrate';
import { apiResponseOK } from '../helpers/api-helper';
import ObjectsModel from '../models/objects';
import { adminOnly } from '../middlewares/admin-access';

const createObject = async (req: Request, res: Response) => {
  const result = await ObjectsModel.create(req.body);

  return res.json(apiResponseOK(result));
};

const updateObject = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ObjectsModel.update(id, req.body);

  return res.json(apiResponseOK(result));
};

const deleteObject = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ObjectsModel.delete(id);

  return res.json(apiResponseOK(result));
};

const getObject = async (req: Request, res: Response) => {
  const { id } = req.params;
  const obj = await ObjectsModel.get(id);

  return res.json(apiResponseOK(obj));
};

const idValidation = celebrate({
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
});

const dataValidation = celebrate({
  body: Joi.object().keys({
    id: Joi.string().required(),
    data: Joi.object().required(),
  }),
});

export function factory(app: Express) {
  const route = app.route('/object/:id?');

  route.post(adminOnly, dataValidation, createObject); 
  route.put(adminOnly, dataValidation, idValidation, updateObject);
  route.delete(adminOnly, idValidation, deleteObject);
  route.get(idValidation, getObject);
}
