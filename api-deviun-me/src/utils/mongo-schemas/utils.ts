import { cloneDeep, set, merge } from 'lodash';

const defaultSchema: any = {
  $jsonSchema: {
    bsonType: 'object',
    properties: {},
    // required: [],
  },
};

export const createSchema = (props: any, required: string[] = []) => {
  const schema = cloneDeep(defaultSchema);

  set(schema, '$jsonSchema.properties', props);
  
  if (required.length) {
    set(schema, '$jsonSchema.required', required);
  }

  return schema;
};

export const createThing = (source: any) =>
  (additional: any = {}) =>
    merge(cloneDeep(source), cloneDeep(additional));
