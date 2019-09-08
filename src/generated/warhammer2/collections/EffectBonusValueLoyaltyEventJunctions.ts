
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsLoyaltyEvents } from "./CampaignBonusValueIdsLoyaltyEvents";
import { LoyaltyEventEffects } from "./LoyaltyEventEffects";

export namespace EffectBonusValueLoyaltyEventJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_loyalty_event_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _loyalltyEvent: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._loyalltyEvent = values["loyallty_event"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsLoyaltyEvents.Entry | undefined {
      const collection = <CampaignBonusValueIdsLoyaltyEvents.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsLoyaltyEvents.KEY, CampaignBonusValueIdsLoyaltyEvents.Entry);
      return collection.find(entry => entry.id === this._bonusValueId);
    }
    
    get loyalltyEvent(): LoyaltyEventEffects.Entry | undefined {
      const collection = <LoyaltyEventEffects.Entry[]>this.collectionCache.getCollection(LoyaltyEventEffects.KEY, LoyaltyEventEffects.Entry);
      return collection.find(entry => entry.event === this._loyalltyEvent);
    }
  }
}

export default EffectBonusValueLoyaltyEventJunctions;
