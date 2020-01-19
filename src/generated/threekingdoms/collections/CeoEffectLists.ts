
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CeoEffectLists {
  export const KEY = new CollectionKey("ceo_effect_lists");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CeoEffectLists;
