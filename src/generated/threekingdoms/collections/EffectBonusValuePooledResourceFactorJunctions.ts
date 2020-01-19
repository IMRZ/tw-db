
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsPooledResourceFactors } from "./CampaignBonusValueIdsPooledResourceFactors";
import { PooledResourceFactorJunctions } from "./PooledResourceFactorJunctions";

export namespace EffectBonusValuePooledResourceFactorJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_pooled_resource_factor_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _resourceFactor: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._resourceFactor = values["resource_factor"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsPooledResourceFactors.Entry | undefined {
      const collection = <CampaignBonusValueIdsPooledResourceFactors.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsPooledResourceFactors.KEY, CampaignBonusValueIdsPooledResourceFactors.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get resourceFactor(): PooledResourceFactorJunctions.Entry | undefined {
      const collection = <PooledResourceFactorJunctions.Entry[]>this.collectionCache.getCollection(PooledResourceFactorJunctions.KEY, PooledResourceFactorJunctions.Entry);
      return collection.find(entry => entry.key === this._resourceFactor);
    }
  }
}

export default EffectBonusValuePooledResourceFactorJunctions;
