import { createSchema, createThing } from './utils';

// things
const stringT = createThing({
  type: 'string',
});
const anyObjectT = createThing({
  type: 'object',
});
const dateT = createThing({
  bsonType: 'date',
});

// schemas
export const objectsSchema = createSchema({
  id: stringT(),
  data: anyObjectT(),
}, ['id', 'data']);

export const listsSchema = createSchema({
  listId: stringT(),
  itemId: stringT(),
  createdAt: dateT(),
  updatedAt: dateT(),
  item: anyObjectT(),
}, ['listId', 'itemId', 'createdAt', 'updatedAt', 'item']);

// result
export const collections: {
  objects: string;
  lists: string;
} = {
  objects: 'objects',
  lists: 'lists',
};

export const schemas: any = {
  [collections.objects]: objectsSchema,
  [collections.lists]: listsSchema,  
};
