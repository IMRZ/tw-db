
import { CollectionCache, CollectionKey } from "../../../common";


export namespace PooledResourceFactors {
  export const KEY = new CollectionKey("pooled_resource_factors");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly minimum: number;
    readonly maximum: number;
    readonly displayNameNegative: string;
    readonly displayNamePositive: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.minimum = values["minimum"];
      this.maximum = values["maximum"];
      this.displayNameNegative = values["display_name_negative"];
      this.displayNamePositive = values["display_name_positive"];
    }
    
  }
}

export default PooledResourceFactors;
