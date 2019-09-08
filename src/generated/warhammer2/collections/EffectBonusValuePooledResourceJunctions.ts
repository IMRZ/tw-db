
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsPooledResources } from "./CampaignBonusValueIdsPooledResources";
import { PooledResources } from "./PooledResources";

export namespace EffectBonusValuePooledResourceJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_pooled_resource_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _pooledResource: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._pooledResource = values["pooled_resource"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsPooledResources.Entry | undefined {
      const collection = <CampaignBonusValueIdsPooledResources.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsPooledResources.KEY, CampaignBonusValueIdsPooledResources.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get pooledResource(): PooledResources.Entry | undefined {
      const collection = <PooledResources.Entry[]>this.collectionCache.getCollection(PooledResources.KEY, PooledResources.Entry);
      return collection.find(entry => entry.key === this._pooledResource);
    }
  }
}

export default EffectBonusValuePooledResourceJunctions;
