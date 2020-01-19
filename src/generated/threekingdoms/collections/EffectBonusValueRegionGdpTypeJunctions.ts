
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsRegionGdpTypes } from "./CampaignBonusValueIdsRegionGdpTypes";
import { CampaignRegionGdpTypes } from "./CampaignRegionGdpTypes";

export namespace EffectBonusValueRegionGdpTypeJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_region_gdp_type_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _regionGdpType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._regionGdpType = values["region_gdp_type"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsRegionGdpTypes.Entry | undefined {
      const collection = <CampaignBonusValueIdsRegionGdpTypes.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsRegionGdpTypes.KEY, CampaignBonusValueIdsRegionGdpTypes.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get regionGdpType(): CampaignRegionGdpTypes.Entry | undefined {
      const collection = <CampaignRegionGdpTypes.Entry[]>this.collectionCache.getCollection(CampaignRegionGdpTypes.KEY, CampaignRegionGdpTypes.Entry);
      return collection.find(entry => entry.key === this._regionGdpType);
    }
  }
}

export default EffectBonusValueRegionGdpTypeJunctions;
