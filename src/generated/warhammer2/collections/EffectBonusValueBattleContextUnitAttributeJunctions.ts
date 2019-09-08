
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsBattleContextUnitAttributes } from "./CampaignBonusValueIdsBattleContextUnitAttributes";
import { BattleContextUnitAttributeJunctions } from "./BattleContextUnitAttributeJunctions";

export namespace EffectBonusValueBattleContextUnitAttributeJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_battle_context_unit_attribute_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _battleContextUnitAttribute: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._battleContextUnitAttribute = values["battle_context_unit_attribute"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsBattleContextUnitAttributes.Entry | undefined {
      const collection = <CampaignBonusValueIdsBattleContextUnitAttributes.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsBattleContextUnitAttributes.KEY, CampaignBonusValueIdsBattleContextUnitAttributes.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get battleContextUnitAttribute(): BattleContextUnitAttributeJunctions.Entry | undefined {
      const collection = <BattleContextUnitAttributeJunctions.Entry[]>this.collectionCache.getCollection(BattleContextUnitAttributeJunctions.KEY, BattleContextUnitAttributeJunctions.Entry);
      return collection.find(entry => entry.key === this._battleContextUnitAttribute);
    }
  }
}

export default EffectBonusValueBattleContextUnitAttributeJunctions;
