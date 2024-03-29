
import { CollectionCache, CollectionKey } from "../../../common";


export namespace EffectUiCategories {
  export const KEY = new CollectionKey("effect_ui_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default EffectUiCategories;
