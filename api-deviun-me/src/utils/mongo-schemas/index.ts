import { createSchema, createThing } from './utils';

// things
const stringT = createThing({
  type: 'string',
});
const anyObjectT = createThing({
  type: 'object',
});

// schemas
export const objectsSchema = createSchema({
  id: stringT(),
  data: anyObjectT(),
}, ['id', 'data']);

// result
export const collections: {
  objects: string;
} = {
  objects: 'objects',
};

export const schemas: any = {
  [collections.objects]: objectsSchema,
};
