
import { CollectionCache, CollectionKey } from "../../../common";


export namespace EffectCategories {
  export const KEY = new CollectionKey("effect_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default EffectCategories;
