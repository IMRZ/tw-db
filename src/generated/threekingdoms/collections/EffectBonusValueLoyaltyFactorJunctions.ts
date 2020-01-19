
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsLoyaltyFactors } from "./CampaignBonusValueIdsLoyaltyFactors";
import { LoyaltyFactors } from "./LoyaltyFactors";

export namespace EffectBonusValueLoyaltyFactorJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_loyalty_factor_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _loyaltyFactor: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._loyaltyFactor = values["loyalty_factor"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsLoyaltyFactors.Entry | undefined {
      const collection = <CampaignBonusValueIdsLoyaltyFactors.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsLoyaltyFactors.KEY, CampaignBonusValueIdsLoyaltyFactors.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get loyaltyFactor(): LoyaltyFactors.Entry | undefined {
      const collection = <LoyaltyFactors.Entry[]>this.collectionCache.getCollection(LoyaltyFactors.KEY, LoyaltyFactors.Entry);
      return collection.find(entry => entry.key === this._loyaltyFactor);
    }
  }
}

export default EffectBonusValueLoyaltyFactorJunctions;
