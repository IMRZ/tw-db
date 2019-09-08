
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitLists {
  export const KEY = new CollectionKey("unit_lists");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default UnitLists;
