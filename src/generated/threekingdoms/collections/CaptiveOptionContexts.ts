
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaptiveOptionContexts {
  export const KEY = new CollectionKey("captive_option_contexts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CaptiveOptionContexts;
