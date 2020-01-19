
import { CollectionCache, CollectionKey } from "../../../common";
import { TExcImplementedTables } from "./TExcImplementedTables";
import { DavePermissions } from "./DavePermissions";

export namespace DaveUserTablePermissions {
  export const KEY = new CollectionKey("dave_user_table_permissions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly userName: string;
    readonly _tableName: string;
    readonly _permission: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.userName = values["user_name"];
      this._tableName = values["table_name"];
      this._permission = values["permission"];
    }
    
    get tableName(): TExcImplementedTables.Entry | undefined {
      const collection = <TExcImplementedTables.Entry[]>this.collectionCache.getCollection(TExcImplementedTables.KEY, TExcImplementedTables.Entry);
      return collection.find(entry => entry.tableName === this._tableName);
    }
    
    get permission(): DavePermissions.Entry | undefined {
      const collection = <DavePermissions.Entry[]>this.collectionCache.getCollection(DavePermissions.KEY, DavePermissions.Entry);
      return collection.find(entry => entry.permission === this._permission);
    }
  }
}

export default DaveUserTablePermissions;
