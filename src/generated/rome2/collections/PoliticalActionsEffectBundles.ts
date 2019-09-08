
import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";

export namespace PoliticalActionsEffectBundles {
  export const KEY = new CollectionKey("political_actions_effect_bundles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly action: string;
    readonly _effectBundle: string;
    readonly duration: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.action = values["action"];
      this._effectBundle = values["effect_bundle"];
      this.duration = values["duration"];
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
  }
}

export default PoliticalActionsEffectBundles;
