
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitSets {
  export const KEY = new CollectionKey("unit_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default UnitSets;
