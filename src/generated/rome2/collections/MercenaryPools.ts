
import { CollectionCache, CollectionKey } from "../../../common";


export namespace MercenaryPools {
  export const KEY = new CollectionKey("mercenary_pools");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default MercenaryPools;
