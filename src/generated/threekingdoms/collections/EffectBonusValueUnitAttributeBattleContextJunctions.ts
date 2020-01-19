
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsUnitAttributes } from "./CampaignBonusValueIdsUnitAttributes";
import { UnitAttributeBattleContextJunctions } from "./UnitAttributeBattleContextJunctions";

export namespace EffectBonusValueUnitAttributeBattleContextJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_unit_attribute_battle_context_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _unitAttributeBattleContext: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._unitAttributeBattleContext = values["unit_attribute_battle_context"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsUnitAttributes.Entry | undefined {
      const collection = <CampaignBonusValueIdsUnitAttributes.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsUnitAttributes.KEY, CampaignBonusValueIdsUnitAttributes.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get unitAttributeBattleContext(): UnitAttributeBattleContextJunctions.Entry | undefined {
      const collection = <UnitAttributeBattleContextJunctions.Entry[]>this.collectionCache.getCollection(UnitAttributeBattleContextJunctions.KEY, UnitAttributeBattleContextJunctions.Entry);
      return collection.find(entry => entry.key === this._unitAttributeBattleContext);
    }
  }
}

export default EffectBonusValueUnitAttributeBattleContextJunctions;
