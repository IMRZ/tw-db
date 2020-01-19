
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiRegionHints {
  export const KEY = new CollectionKey("cai_region_hints");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CaiRegionHints;
