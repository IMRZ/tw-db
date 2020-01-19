
import { CollectionCache, CollectionKey } from "../../../common";


export namespace EffectBundleTargets {
  export const KEY = new CollectionKey("effect_bundle_targets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default EffectBundleTargets;
