import { mongodb, collectionNames } from '../utils/mongodb';
import { Collection } from 'just-mongo';

export interface ObjectT { 
  id: string;
  data: any;
}

export class Objects {
  objects: Collection;

  constructor() {
    this.objects = mongodb.collection(collectionNames.objects);
  }

  async get(id: string): Promise<ObjectT> {
    const obj: ObjectT = await this.objects.findOne({
      id,
    });

    return obj;
  }

  async create({ id, data }: ObjectT): Promise<ObjectT> {
    const same = await this.get(id);

    if (same) {
      return this.update(id, { id, data });
    }

    const result: any = await this.objects.insert({ id, data });

    return result.ops[0];
  }

  async update(id: string, { data }: ObjectT): Promise<ObjectT> {
    await this.objects.updateOne({ id }, {
      id, data,
    });

    return { id, data };
  }

  async delete(id: string): Promise<boolean> {
    const result: any = await this.objects.deleteOne({ id });

    return true;
  }
}

export default new Objects();
