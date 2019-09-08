
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsUnitSetUnitAbilities } from "./CampaignBonusValueIdsUnitSetUnitAbilities";
import { UnitSetUnitAbilityJunctions } from "./UnitSetUnitAbilityJunctions";

export namespace EffectBonusValueUnitSetUnitAbilityJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_unit_set_unit_ability_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _unitSetAbility: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._unitSetAbility = values["unit_set_ability"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsUnitSetUnitAbilities.Entry | undefined {
      const collection = <CampaignBonusValueIdsUnitSetUnitAbilities.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsUnitSetUnitAbilities.KEY, CampaignBonusValueIdsUnitSetUnitAbilities.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get unitSetAbility(): UnitSetUnitAbilityJunctions.Entry | undefined {
      const collection = <UnitSetUnitAbilityJunctions.Entry[]>this.collectionCache.getCollection(UnitSetUnitAbilityJunctions.KEY, UnitSetUnitAbilityJunctions.Entry);
      return collection.find(entry => entry.key === this._unitSetAbility);
    }
  }
}

export default EffectBonusValueUnitSetUnitAbilityJunctions;
