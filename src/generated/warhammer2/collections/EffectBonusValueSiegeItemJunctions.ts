
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsSiegeItems } from "./CampaignBonusValueIdsSiegeItems";
import { BattlefieldDeployableSiegeItems } from "./BattlefieldDeployableSiegeItems";

export namespace EffectBonusValueSiegeItemJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_siege_item_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _siegeItem: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._siegeItem = values["siege_item"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsSiegeItems.Entry | undefined {
      const collection = <CampaignBonusValueIdsSiegeItems.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsSiegeItems.KEY, CampaignBonusValueIdsSiegeItems.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get siegeItem(): BattlefieldDeployableSiegeItems.Entry | undefined {
      const collection = <BattlefieldDeployableSiegeItems.Entry[]>this.collectionCache.getCollection(BattlefieldDeployableSiegeItems.KEY, BattlefieldDeployableSiegeItems.Entry);
      return collection.find(entry => entry.key === this._siegeItem);
    }
  }
}

export default EffectBonusValueSiegeItemJunctions;
