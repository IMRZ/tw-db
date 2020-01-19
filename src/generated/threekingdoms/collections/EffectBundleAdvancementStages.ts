
import { CollectionCache, CollectionKey } from "../../../common";


export namespace EffectBundleAdvancementStages {
  export const KEY = new CollectionKey("effect_bundle_advancement_stages");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default EffectBundleAdvancementStages;
