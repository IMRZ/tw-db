
import { CollectionCache, CollectionKey } from "../../../common";


export namespace FactionSets {
  export const KEY = new CollectionKey("faction_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default FactionSets;
