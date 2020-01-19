
import { CollectionCache, CollectionKey } from "../../../common";


export namespace MinisterialPositionPermissions {
  export const KEY = new CollectionKey("ministerial_position_permissions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default MinisterialPositionPermissions;
