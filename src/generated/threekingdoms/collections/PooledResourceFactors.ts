
import { CollectionCache, CollectionKey } from "../../../common";


export namespace PooledResourceFactors {
  export const KEY = new CollectionKey("pooled_resource_factors");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly displayNamePositive: string;
    readonly displayNameNegative: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.displayNamePositive = values["display_name_positive"];
      this.displayNameNegative = values["display_name_negative"];
    }
    
  }
}

export default PooledResourceFactors;
