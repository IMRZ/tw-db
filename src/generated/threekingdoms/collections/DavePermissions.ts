
import { CollectionCache, CollectionKey } from "../../../common";


export namespace DavePermissions {
  export const KEY = new CollectionKey("dave_permissions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly permission: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.permission = values["permission"];
    }
    
  }
}

export default DavePermissions;
