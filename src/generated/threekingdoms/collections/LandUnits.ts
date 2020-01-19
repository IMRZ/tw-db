
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitCategory } from "./UnitCategory";
import { UnitClass } from "./UnitClass";
import { UnitDescriptionShortTexts } from "./UnitDescriptionShortTexts";
import { UnitDescriptionHistoricalTexts } from "./UnitDescriptionHistoricalTexts";
import { UnitDescriptionStrengthsWeaknessesTexts } from "./UnitDescriptionStrengthsWeaknessesTexts";
import { UnitSpacings } from "./UnitSpacings";
import { UnitTrainingLevelEnum } from "./UnitTrainingLevelEnum";
import { UnitArmourTypes } from "./UnitArmourTypes";
import { UnitShieldTypes } from "./UnitShieldTypes";
import { MissileWeapons } from "./MissileWeapons";
import { MeleeWeapons } from "./MeleeWeapons";
import { LandUnitsOfficers } from "./LandUnitsOfficers";
import { UnitAttributesGroups } from "./UnitAttributesGroups";
import { AudioVoSelectedSwitches } from "./AudioVoSelectedSwitches";
import { GroundTypeStatEffectGroups } from "./GroundTypeStatEffectGroups";
import { AiUsageGroups } from "./AiUsageGroups";
import { TexcExpansions } from "./TexcExpansions";
import { PersonalityLocationEnums } from "./PersonalityLocationEnums";

export namespace LandUnits {
  export const KEY = new CollectionKey("land_units");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreenName: string;
    readonly _category: string;
    readonly _class: string;
    readonly _shortDescriptionText: string;
    readonly _historicalDescriptionText: string;
    readonly _strengthsWeaknessesText: string;
    readonly campaignActionPoints: number;
    readonly supportsFirstPerson: boolean;
    readonly _spacing: string;
    readonly rankDepth: number;
    readonly morale: number;
    readonly _trainingLevel: string;
    readonly _armour: string;
    readonly _shield: string;
    readonly _primaryMissileWeapon: string;
    readonly accuracy: number;
    readonly primaryAmmo: number;
    readonly _primaryMeleeWeapon: string;
    readonly meleeAttack: number;
    readonly chargeBonus: number;
    readonly meleeDefence: number;
    readonly dismountedMeleeAttack: number;
    readonly dismountedChargeBonus: number;
    readonly _officers: string;
    readonly isMale: boolean;
    readonly visibilitySpottingRangeMin: number;
    readonly visibilitySpottingRangeMax: number;
    readonly abilityGlobalRecharge: number;
    readonly _attributeGroup: string;
    readonly spotDistTree: number;
    readonly spotDistScrub: number;
    readonly reloadTimeReductionPercentage: number;
    readonly looseSpacing: boolean;
    readonly _selectionVo: string;
    readonly _selectedVoSecondary: string;
    readonly _selectedVoTertiary: string;
    readonly hidingScalar: number;
    readonly _groundStatEffectGroup: string;
    readonly capturePower: number;
    readonly secondaryAmmo: number;
    readonly damageModFlame: number;
    readonly damageModMagic: number;
    readonly damageModPhysical: number;
    readonly damageModMissile: number;
    readonly damageModAll: number;
    readonly _aiUsageGroup: string;
    readonly canSkirmish: boolean;
    readonly concealedName: string;
    readonly syncLocomotion: boolean;
    readonly _gameExpansionKey: string;
    readonly meleeAttackIntervalReductionPercentage: number;
    readonly _personalitiesLocation: string;
    readonly isPrimarilyMelee: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreenName = values["onscreen_name"];
      this._category = values["category"];
      this._class = values["class"];
      this._shortDescriptionText = values["short_description_text"];
      this._historicalDescriptionText = values["historical_description_text"];
      this._strengthsWeaknessesText = values["strengths_weaknesses_text"];
      this.campaignActionPoints = values["campaign_action_points"];
      this.supportsFirstPerson = !!values["supports_first_person"];
      this._spacing = values["spacing"];
      this.rankDepth = values["rank_depth"];
      this.morale = values["morale"];
      this._trainingLevel = values["training_level"];
      this._armour = values["armour"];
      this._shield = values["shield"];
      this._primaryMissileWeapon = values["primary_missile_weapon"];
      this.accuracy = values["accuracy"];
      this.primaryAmmo = values["primary_ammo"];
      this._primaryMeleeWeapon = values["primary_melee_weapon"];
      this.meleeAttack = values["melee_attack"];
      this.chargeBonus = values["charge_bonus"];
      this.meleeDefence = values["melee_defence"];
      this.dismountedMeleeAttack = values["dismounted_melee_attack"];
      this.dismountedChargeBonus = values["dismounted_charge_bonus"];
      this._officers = values["officers"];
      this.isMale = !!values["is_male"];
      this.visibilitySpottingRangeMin = values["visibility_spotting_range_min"];
      this.visibilitySpottingRangeMax = values["visibility_spotting_range_max"];
      this.abilityGlobalRecharge = values["ability_global_recharge"];
      this._attributeGroup = values["attribute_group"];
      this.spotDistTree = values["spot_dist_tree"];
      this.spotDistScrub = values["spot_dist_scrub"];
      this.reloadTimeReductionPercentage = values["reload_time_reduction_percentage"];
      this.looseSpacing = !!values["loose_spacing"];
      this._selectionVo = values["selection_vo"];
      this._selectedVoSecondary = values["selected_vo_secondary"];
      this._selectedVoTertiary = values["selected_vo_tertiary"];
      this.hidingScalar = values["hiding_scalar"];
      this._groundStatEffectGroup = values["ground_stat_effect_group"];
      this.capturePower = values["capture_power"];
      this.secondaryAmmo = values["secondary_ammo"];
      this.damageModFlame = values["damage_mod_flame"];
      this.damageModMagic = values["damage_mod_magic"];
      this.damageModPhysical = values["damage_mod_physical"];
      this.damageModMissile = values["damage_mod_missile"];
      this.damageModAll = values["damage_mod_all"];
      this._aiUsageGroup = values["ai_usage_group"];
      this.canSkirmish = !!values["can_skirmish"];
      this.concealedName = values["concealed_name"];
      this.syncLocomotion = !!values["sync_locomotion"];
      this._gameExpansionKey = values["game_expansion_key"];
      this.meleeAttackIntervalReductionPercentage = values["melee_attack_interval_reduction_percentage"];
      this._personalitiesLocation = values["personalities_location"];
      this.isPrimarilyMelee = !!values["is_primarily_melee"];
    }
    
    get category(): UnitCategory.Entry | undefined {
      const collection = <UnitCategory.Entry[]>this.collectionCache.getCollection(UnitCategory.KEY, UnitCategory.Entry);
      return collection.find(entry => entry.key === this._category);
    }
    
    get class(): UnitClass.Entry | undefined {
      const collection = <UnitClass.Entry[]>this.collectionCache.getCollection(UnitClass.KEY, UnitClass.Entry);
      return collection.find(entry => entry.key === this._class);
    }
    
    get shortDescriptionText(): UnitDescriptionShortTexts.Entry | undefined {
      const collection = <UnitDescriptionShortTexts.Entry[]>this.collectionCache.getCollection(UnitDescriptionShortTexts.KEY, UnitDescriptionShortTexts.Entry);
      return collection.find(entry => entry.key === this._shortDescriptionText);
    }
    
    get historicalDescriptionText(): UnitDescriptionHistoricalTexts.Entry | undefined {
      const collection = <UnitDescriptionHistoricalTexts.Entry[]>this.collectionCache.getCollection(UnitDescriptionHistoricalTexts.KEY, UnitDescriptionHistoricalTexts.Entry);
      return collection.find(entry => entry.key === this._historicalDescriptionText);
    }
    
    get strengthsWeaknessesText(): UnitDescriptionStrengthsWeaknessesTexts.Entry | undefined {
      const collection = <UnitDescriptionStrengthsWeaknessesTexts.Entry[]>this.collectionCache.getCollection(UnitDescriptionStrengthsWeaknessesTexts.KEY, UnitDescriptionStrengthsWeaknessesTexts.Entry);
      return collection.find(entry => entry.key === this._strengthsWeaknessesText);
    }
    
    get spacing(): UnitSpacings.Entry | undefined {
      const collection = <UnitSpacings.Entry[]>this.collectionCache.getCollection(UnitSpacings.KEY, UnitSpacings.Entry);
      return collection.find(entry => entry.key === this._spacing);
    }
    
    get trainingLevel(): UnitTrainingLevelEnum.Entry | undefined {
      const collection = <UnitTrainingLevelEnum.Entry[]>this.collectionCache.getCollection(UnitTrainingLevelEnum.KEY, UnitTrainingLevelEnum.Entry);
      return collection.find(entry => entry.key === this._trainingLevel);
    }
    
    get armour(): UnitArmourTypes.Entry | undefined {
      const collection = <UnitArmourTypes.Entry[]>this.collectionCache.getCollection(UnitArmourTypes.KEY, UnitArmourTypes.Entry);
      return collection.find(entry => entry.key === this._armour);
    }
    
    get shield(): UnitShieldTypes.Entry | undefined {
      const collection = <UnitShieldTypes.Entry[]>this.collectionCache.getCollection(UnitShieldTypes.KEY, UnitShieldTypes.Entry);
      return collection.find(entry => entry.key === this._shield);
    }
    
    get primaryMissileWeapon(): MissileWeapons.Entry | undefined {
      const collection = <MissileWeapons.Entry[]>this.collectionCache.getCollection(MissileWeapons.KEY, MissileWeapons.Entry);
      return collection.find(entry => entry.key === this._primaryMissileWeapon);
    }
    
    get primaryMeleeWeapon(): MeleeWeapons.Entry | undefined {
      const collection = <MeleeWeapons.Entry[]>this.collectionCache.getCollection(MeleeWeapons.KEY, MeleeWeapons.Entry);
      return collection.find(entry => entry.key === this._primaryMeleeWeapon);
    }
    
    get officers(): LandUnitsOfficers.Entry | undefined {
      const collection = <LandUnitsOfficers.Entry[]>this.collectionCache.getCollection(LandUnitsOfficers.KEY, LandUnitsOfficers.Entry);
      return collection.find(entry => entry.key === this._officers);
    }
    
    get attributeGroup(): UnitAttributesGroups.Entry | undefined {
      const collection = <UnitAttributesGroups.Entry[]>this.collectionCache.getCollection(UnitAttributesGroups.KEY, UnitAttributesGroups.Entry);
      return collection.find(entry => entry.groupName === this._attributeGroup);
    }
    
    get selectionVo(): AudioVoSelectedSwitches.Entry | undefined {
      const collection = <AudioVoSelectedSwitches.Entry[]>this.collectionCache.getCollection(AudioVoSelectedSwitches.KEY, AudioVoSelectedSwitches.Entry);
      return collection.find(entry => entry.key === this._selectionVo);
    }
    
    get selectedVoSecondary(): AudioVoSelectedSwitches.Entry | undefined {
      const collection = <AudioVoSelectedSwitches.Entry[]>this.collectionCache.getCollection(AudioVoSelectedSwitches.KEY, AudioVoSelectedSwitches.Entry);
      return collection.find(entry => entry.key === this._selectedVoSecondary);
    }
    
    get selectedVoTertiary(): AudioVoSelectedSwitches.Entry | undefined {
      const collection = <AudioVoSelectedSwitches.Entry[]>this.collectionCache.getCollection(AudioVoSelectedSwitches.KEY, AudioVoSelectedSwitches.Entry);
      return collection.find(entry => entry.key === this._selectedVoTertiary);
    }
    
    get groundStatEffectGroup(): GroundTypeStatEffectGroups.Entry | undefined {
      const collection = <GroundTypeStatEffectGroups.Entry[]>this.collectionCache.getCollection(GroundTypeStatEffectGroups.KEY, GroundTypeStatEffectGroups.Entry);
      return collection.find(entry => entry.groupName === this._groundStatEffectGroup);
    }
    
    get aiUsageGroup(): AiUsageGroups.Entry | undefined {
      const collection = <AiUsageGroups.Entry[]>this.collectionCache.getCollection(AiUsageGroups.KEY, AiUsageGroups.Entry);
      return collection.find(entry => entry.key === this._aiUsageGroup);
    }
    
    get gameExpansionKey(): TexcExpansions.Entry | undefined {
      const collection = <TexcExpansions.Entry[]>this.collectionCache.getCollection(TexcExpansions.KEY, TexcExpansions.Entry);
      return collection.find(entry => entry.expansion === this._gameExpansionKey);
    }
    
    get personalitiesLocation(): PersonalityLocationEnums.Entry | undefined {
      const collection = <PersonalityLocationEnums.Entry[]>this.collectionCache.getCollection(PersonalityLocationEnums.KEY, PersonalityLocationEnums.Entry);
      return collection.find(entry => entry.key === this._personalitiesLocation);
    }
  }
}

export default LandUnits;
