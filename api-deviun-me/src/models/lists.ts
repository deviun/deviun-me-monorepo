import { Collection } from 'just-mongo';
import * as uuid from 'uuid/v4';
import { mongodb, collectionNames } from '../utils/mongodb';

interface getAllOptionsT {
  offset?: number;
  limit?: number;
  sort?: any;
}

export class Lists {
  lists: Collection;

  constructor() {
    this.lists = mongodb.collection(collectionNames.lists);
  }

  async push(listId: string, item: any) {
    const date = new Date();
    const itemId = uuid();

    await this.lists.insert({
      listId,
      itemId,
      item,
      createdAt: date,
      updatedAt: date,
    });

    return item;
  }

  async delete(listId: string, itemId: string) {
    return this.lists.deleteOne({ listId, itemId });
  }

  async update(listId: string, itemId: string, item: any) {
    const date = new Date();
    await this.lists.editOne({
      listId, itemId,
    }, { item, updatedAt: date });

    return item;
  }

  async getAll(listId: string, {
    limit = 100,
    offset = 0,
    sort,
  }: getAllOptionsT = {}) {
    const where = { listId };
    const options: any = {
      skip: offset,
      limit,
    };

    if (sort) {
      options.sort = sort;
    }

    return this.lists.find(where, options);
  }
}

export default new Lists();
