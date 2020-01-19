
import { CollectionCache, CollectionKey } from "../../../common";


export namespace FeatureSets {
  export const KEY = new CollectionKey("feature_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default FeatureSets;
