
import { CollectionCache, CollectionKey } from "../../../common";
import { TExcImplementedTables } from "./TExcImplementedTables";

export namespace DaveRestrictedTables {
  export const KEY = new CollectionKey("dave_restricted_tables");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _tableName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._tableName = values["table_name"];
    }
    
    get tableName(): TExcImplementedTables.Entry | undefined {
      const collection = <TExcImplementedTables.Entry[]>this.collectionCache.getCollection(TExcImplementedTables.KEY, TExcImplementedTables.Entry);
      return collection.find(entry => entry.tableName === this._tableName);
    }
  }
}

export default DaveRestrictedTables;
