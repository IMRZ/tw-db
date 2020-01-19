
import { CollectionCache, CollectionKey } from "../../../common";


export namespace FactionFeatureForests {
  export const KEY = new CollectionKey("faction_feature_forests");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default FactionFeatureForests;
