
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsCommodity } from "./CampaignBonusValueIdsCommodity";
import { Commodities } from "./Commodities";

export namespace EffectBonusValueCommodityJunction {
  export const KEY = new CollectionKey("effect_bonus_value_commodity_junction");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _commodity: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._commodity = values["commodity"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsCommodity.Entry | undefined {
      const collection = <CampaignBonusValueIdsCommodity.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsCommodity.KEY, CampaignBonusValueIdsCommodity.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get commodity(): Commodities.Entry | undefined {
      const collection = <Commodities.Entry[]>this.collectionCache.getCollection(Commodities.KEY, Commodities.Entry);
      return collection.find(entry => entry._key === this._commodity);
    }
  }
}

export default EffectBonusValueCommodityJunction;
