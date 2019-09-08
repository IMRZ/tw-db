
import { CollectionCache, CollectionKey } from "../../../common";
import { SpecialAbilityPhaseEffectTypes } from "./SpecialAbilityPhaseEffectTypes";
import { SpecialAbilityStanceEnums } from "./SpecialAbilityStanceEnums";
import { SpecialAbilityPhaseDisplays } from "./SpecialAbilityPhaseDisplays";
import { AudioAbilityPhases } from "./AudioAbilityPhases";
import { BattleVortexCompositeSceneGroups } from "./BattleVortexCompositeSceneGroups";

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
    readonly freezeFatigue: boolean;
    readonly fatigueChangeRatio: number;
    readonly inspirationAuraRangeMod: number;
    readonly abilityRechargeChange: number;
    readonly onscreenName: string;
    readonly resurrect: boolean;
    readonly hpChangeFrequency: number;
    readonly healAmount: number;
    readonly damageChance: number;
    readonly damageAmount: number;
    readonly maxDamagedEntities: number;
    readonly manaRegenMod: number;
    readonly manaMaxDepletionMod: number;
    readonly imbueMagical: boolean;
    readonly imbueIgnition: number;
    readonly _imbueContact: string;
    readonly _phaseDisplay: string;
    readonly _phaseAudio: string;
    readonly rechargeTime: number;
    readonly isHiddenInUi: boolean;
    readonly affectsAllies: boolean;
    readonly affectsEnemies: boolean;
    readonly replenishAmmo: number;
    readonly _compositeSceneGroup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this.duration = values["duration"];
      this._effectType = values["effect_type"];
      this._requestedStance = values["requested_stance"];
      this.unbreakable = !!values["unbreakable"];
      this.cantMove = !!values["cant_move"];
      this.freezeFatigue = !!values["freeze_fatigue"];
      this.fatigueChangeRatio = values["fatigue_change_ratio"];
      this.inspirationAuraRangeMod = values["inspiration_aura_range_mod"];
      this.abilityRechargeChange = values["ability_recharge_change"];
      this.onscreenName = values["onscreen_name"];
      this.resurrect = !!values["resurrect"];
      this.hpChangeFrequency = values["hp_change_frequency"];
      this.healAmount = values["heal_amount"];
      this.damageChance = values["damage_chance"];
      this.damageAmount = values["damage_amount"];
      this.maxDamagedEntities = values["max_damaged_entities"];
      this.manaRegenMod = values["mana_regen_mod"];
      this.manaMaxDepletionMod = values["mana_max_depletion_mod"];
      this.imbueMagical = !!values["imbue_magical"];
      this.imbueIgnition = values["imbue_ignition"];
      this._imbueContact = values["imbue_contact"];
      this._phaseDisplay = values["phase_display"];
      this._phaseAudio = values["phase_audio"];
      this.rechargeTime = values["recharge_time"];
      this.isHiddenInUi = !!values["is_hidden_in_ui"];
      this.affectsAllies = !!values["affects_allies"];
      this.affectsEnemies = !!values["affects_enemies"];
      this.replenishAmmo = values["replenish_ammo"];
      this._compositeSceneGroup = values["composite_scene_group"];
    }
    
    get effectType(): SpecialAbilityPhaseEffectTypes.Entry | undefined {
      const collection = <SpecialAbilityPhaseEffectTypes.Entry[]>this.collectionCache.getCollection(SpecialAbilityPhaseEffectTypes.KEY, SpecialAbilityPhaseEffectTypes.Entry);
      return collection.find(entry => entry.effectType === this._effectType);
    }
    
    get requestedStance(): SpecialAbilityStanceEnums.Entry | undefined {
      const collection = <SpecialAbilityStanceEnums.Entry[]>this.collectionCache.getCollection(SpecialAbilityStanceEnums.KEY, SpecialAbilityStanceEnums.Entry);
      return collection.find(entry => entry.key === this._requestedStance);
    }
    
    get imbueContact(): SpecialAbilityPhases.Entry | undefined {
      const collection = <SpecialAbilityPhases.Entry[]>this.collectionCache.getCollection(SpecialAbilityPhases.KEY, SpecialAbilityPhases.Entry);
      return collection.find(entry => entry.id === this._imbueContact);
    }
    
    get phaseDisplay(): SpecialAbilityPhaseDisplays.Entry | undefined {
      const collection = <SpecialAbilityPhaseDisplays.Entry[]>this.collectionCache.getCollection(SpecialAbilityPhaseDisplays.KEY, SpecialAbilityPhaseDisplays.Entry);
      return collection.find(entry => entry.key === this._phaseDisplay);
    }
    
    get phaseAudio(): AudioAbilityPhases.Entry | undefined {
      const collection = <AudioAbilityPhases.Entry[]>this.collectionCache.getCollection(AudioAbilityPhases.KEY, AudioAbilityPhases.Entry);
      return collection.find(entry => entry.key === this._phaseAudio);
    }
    
    get compositeSceneGroup(): BattleVortexCompositeSceneGroups.Entry | undefined {
      const collection = <BattleVortexCompositeSceneGroups.Entry[]>this.collectionCache.getCollection(BattleVortexCompositeSceneGroups.KEY, BattleVortexCompositeSceneGroups.Entry);
      return collection.find(entry => entry.groupId === this._compositeSceneGroup);
    }
  }
}

export default SpecialAbilityPhases;
