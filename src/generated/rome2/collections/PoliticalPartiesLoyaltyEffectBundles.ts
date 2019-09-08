
import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";

export namespace PoliticalPartiesLoyaltyEffectBundles {
  export const KEY = new CollectionKey("political_parties_loyalty_effect_bundles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly loyalty: number;
    readonly _bundleKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.loyalty = values["loyalty"];
      this._bundleKey = values["bundle_key"];
    }
    
    get bundleKey(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._bundleKey);
    }
  }
}

export default PoliticalPartiesLoyaltyEffectBundles;
