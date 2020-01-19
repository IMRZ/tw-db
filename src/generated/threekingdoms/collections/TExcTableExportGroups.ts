
import { CollectionCache, CollectionKey } from "../../../common";
import { TExcTableExportCategories } from "./TExcTableExportCategories";
import { TExcImplementedTables } from "./TExcImplementedTables";

export namespace TExcTableExportGroups {
  export const KEY = new CollectionKey("TExc_TableExportGroups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _category: string;
    readonly _table: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["ID"];
      this._category = values["category"];
      this._table = values["table"];
    }
    
    get category(): TExcTableExportCategories.Entry | undefined {
      const collection = <TExcTableExportCategories.Entry[]>this.collectionCache.getCollection(TExcTableExportCategories.KEY, TExcTableExportCategories.Entry);
      return collection.find(entry => entry.category === this._category);
    }
    
    get table(): TExcImplementedTables.Entry | undefined {
      const collection = <TExcImplementedTables.Entry[]>this.collectionCache.getCollection(TExcImplementedTables.KEY, TExcImplementedTables.Entry);
      return collection.find(entry => entry.tableName === this._table);
    }
  }
}

export default TExcTableExportGroups;
