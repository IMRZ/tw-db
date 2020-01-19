
import { CollectionCache, CollectionKey } from "../../../common";


export namespace FactionFeatureTrees {
  export const KEY = new CollectionKey("faction_feature_trees");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default FactionFeatureTrees;
