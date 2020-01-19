
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaptiveOptionOutcomes {
  export const KEY = new CollectionKey("captive_option_outcomes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CaptiveOptionOutcomes;
