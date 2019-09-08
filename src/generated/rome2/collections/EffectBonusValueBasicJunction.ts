
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsBasic } from "./CampaignBonusValueIdsBasic";

export namespace EffectBonusValueBasicJunction {
  export const KEY = new CollectionKey("effect_bonus_value_basic_junction");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsBasic.Entry | undefined {
      const collection = <CampaignBonusValueIdsBasic.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsBasic.KEY, CampaignBonusValueIdsBasic.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
  }
}

export default EffectBonusValueBasicJunction;
