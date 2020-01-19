
import { CollectionCache, CollectionKey } from "../../../common";


export namespace FactionFeatures {
  export const KEY = new CollectionKey("faction_features");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default FactionFeatures;
