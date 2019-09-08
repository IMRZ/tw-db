
import { CollectionCache, CollectionKey } from "../../../common";
import { PurchasableEffects } from "./PurchasableEffects";
import { ResourceCosts } from "./ResourceCosts";
import { EffectBundles } from "./EffectBundles";

export namespace PurchasableEffectLevels {
  export const KEY = new CollectionKey("purchasable_effect_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly level: number;
    readonly _resourceCost: string;
    readonly _effectBundle: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this.level = values["level"];
      this._resourceCost = values["resource_cost"];
      this._effectBundle = values["effect_bundle"];
    }
    
    get effect(): PurchasableEffects.Entry | undefined {
      const collection = <PurchasableEffects.Entry[]>this.collectionCache.getCollection(PurchasableEffects.KEY, PurchasableEffects.Entry);
      return collection.find(entry => entry.id === this._effect);
    }
    
    get resourceCost(): ResourceCosts.Entry | undefined {
      const collection = <ResourceCosts.Entry[]>this.collectionCache.getCollection(ResourceCosts.KEY, ResourceCosts.Entry);
      return collection.find(entry => entry.id === this._resourceCost);
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
  }
}

export default PurchasableEffectLevels;
