
import { CollectionCache, CollectionKey } from "../../../common";
import { SpecialAbilityPhaseEffectTypes } from "./SpecialAbilityPhaseEffectTypes";
import { SpecialAbilityStanceEnums } from "./SpecialAbilityStanceEnums";
import { UiEffects } from "./UiEffects";

export namespace SpecialAbilityPhases {
  export const KEY = new CollectionKey("special_ability_phases");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly duration: number;
    readonly _effectType: string;
    readonly _requestedStance: string;
    readonly unbreakable: boolean;
    readonly cantMove: boolean;
    readonly killOwnUnit: boolean;
    readonly minorCasualties: boolean;
    readonly majorCasualties: boolean;
    readonly freezeFatigue: boolean;
    readonly fatigueChangeRatio: number;
    readonly inspirationAuraRangeMod: number;
    readonly abilityRechargeChange: number;
    readonly _uiVfx: string;
    readonly rallyAmount: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this.duration = values["duration"];
      this._effectType = values["effect_type"];
      this._requestedStance = values["requested_stance"];
      this.unbreakable = !!values["unbreakable"];
      this.cantMove = !!values["cant_move"];
      this.killOwnUnit = !!values["kill_own_unit"];
      this.minorCasualties = !!values["minor_casualties"];
      this.majorCasualties = !!values["major_casualties"];
      this.freezeFatigue = !!values["freeze_fatigue"];
      this.fatigueChangeRatio = values["fatigue_change_ratio"];
      this.inspirationAuraRangeMod = values["inspiration_aura_range_mod"];
      this.abilityRechargeChange = values["ability_recharge_change"];
      this._uiVfx = values["ui_vfx"];
      this.rallyAmount = values["rally_amount"];
    }
    
    get effectType(): SpecialAbilityPhaseEffectTypes.Entry | undefined {
      const collection = <SpecialAbilityPhaseEffectTypes.Entry[]>this.collectionCache.getCollection(SpecialAbilityPhaseEffectTypes.KEY, SpecialAbilityPhaseEffectTypes.Entry);
      return collection.find(entry => entry.effectType === this._effectType);
    }
    
    get requestedStance(): SpecialAbilityStanceEnums.Entry | undefined {
      const collection = <SpecialAbilityStanceEnums.Entry[]>this.collectionCache.getCollection(SpecialAbilityStanceEnums.KEY, SpecialAbilityStanceEnums.Entry);
      return collection.find(entry => entry.key === this._requestedStance);
    }
    
    get uiVfx(): UiEffects.Entry | undefined {
      const collection = <UiEffects.Entry[]>this.collectionCache.getCollection(UiEffects.KEY, UiEffects.Entry);
      return collection.find(entry => entry.key === this._uiVfx);
    }
  }
}

export default SpecialAbilityPhases;
