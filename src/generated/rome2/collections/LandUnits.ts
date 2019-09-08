
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitCategory } from "./UnitCategory";
import { UnitClass } from "./UnitClass";
import { UnitDescriptionShortTexts } from "./UnitDescriptionShortTexts";
import { UnitDescriptionHistoricalTexts } from "./UnitDescriptionHistoricalTexts";
import { UnitDescriptionStrengthsWeaknessesTexts } from "./UnitDescriptionStrengthsWeaknessesTexts";
import { BattleEntities } from "./BattleEntities";
import { BattleAnimationsTable } from "./BattleAnimationsTable";
import { Mounts } from "./Mounts";
import { Animals } from "./Animals";
import { UnitSpacings } from "./UnitSpacings";
import { UnitTrainingLevelEnum } from "./UnitTrainingLevelEnum";
import { UnitArmourTypes } from "./UnitArmourTypes";
import { UnitShieldTypes } from "./UnitShieldTypes";
import { MissileWeapons } from "./MissileWeapons";
import { MeleeWeapons } from "./MeleeWeapons";
import { LandUnitsOfficers } from "./LandUnitsOfficers";
import { BattlefieldEngines } from "./BattlefieldEngines";
import { LandUnitArticulatedVehicles } from "./LandUnitArticulatedVehicles";
import { UnitAttributesGroups } from "./UnitAttributesGroups";
import { BattlefieldChariots } from "./BattlefieldChariots";
import { SpottingAndHidingValues } from "./SpottingAndHidingValues";
import { AudioVoSelectedSwitches } from "./AudioVoSelectedSwitches";

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
    readonly _manEntity: string;
    readonly _manAnimation: string;
    readonly numMounts: number;
    readonly _mount: string;
    readonly numAnimals: number;
    readonly _animal: string;
    readonly _spacing: string;
    readonly rankDepth: number;
    readonly morale: number;
    readonly bonusHitPoints: number;
    readonly _trainingLevel: string;
    readonly _armour: string;
    readonly _shield: string;
    readonly _primaryMissileWeapon: string;
    readonly accuracy: number;
    readonly ammo: number;
    readonly _primaryMeleeWeapon: string;
    readonly meleeAttack: number;
    readonly chargeBonus: number;
    readonly meleeDefence: number;
    readonly dismountedMeleeAttack: number;
    readonly dismountedChargeBonus: number;
    readonly dismountedMeleeDefence: number;
    readonly numGuns: number;
    readonly _officers: string;
    readonly _engine: string;
    readonly _articulatedRecord: string;
    readonly isMale: boolean;
    readonly visibilitySpottingRangeMin: number;
    readonly visibilitySpottingRangeMax: number;
    readonly abilityGlobalRecharge: number;
    readonly _attributeGroup: string;
    readonly spotDistTree: number;
    readonly spotDistScrub: number;
    readonly _chariot: string;
    readonly numChariots: number;
    readonly reload: number;
    readonly looseSpacing: boolean;
    readonly _spottingAndHiding: string;
    readonly _selectionVo: string;
    readonly _selectedVoSecondary: string;
    readonly _selectedVoTertiary: string;
    readonly hidingScalar: number;

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
      this._manEntity = values["man_entity"];
      this._manAnimation = values["man_animation"];
      this.numMounts = values["num_mounts"];
      this._mount = values["mount"];
      this.numAnimals = values["num_animals"];
      this._animal = values["animal"];
      this._spacing = values["spacing"];
      this.rankDepth = values["rank_depth"];
      this.morale = values["morale"];
      this.bonusHitPoints = values["bonus_hit_points"];
      this._trainingLevel = values["training_level"];
      this._armour = values["armour"];
      this._shield = values["shield"];
      this._primaryMissileWeapon = values["primary_missile_weapon"];
      this.accuracy = values["accuracy"];
      this.ammo = values["ammo"];
      this._primaryMeleeWeapon = values["primary_melee_weapon"];
      this.meleeAttack = values["melee_attack"];
      this.chargeBonus = values["charge_bonus"];
      this.meleeDefence = values["melee_defence"];
      this.dismountedMeleeAttack = values["dismounted_melee_attack"];
      this.dismountedChargeBonus = values["dismounted_charge_bonus"];
      this.dismountedMeleeDefence = values["dismounted_melee_defence"];
      this.numGuns = values["num_guns"];
      this._officers = values["officers"];
      this._engine = values["engine"];
      this._articulatedRecord = values["articulated_record"];
      this.isMale = !!values["is_male"];
      this.visibilitySpottingRangeMin = values["visibility_spotting_range_min"];
      this.visibilitySpottingRangeMax = values["visibility_spotting_range_max"];
      this.abilityGlobalRecharge = values["ability_global_recharge"];
      this._attributeGroup = values["attribute_group"];
      this.spotDistTree = values["spot_dist_tree"];
      this.spotDistScrub = values["spot_dist_scrub"];
      this._chariot = values["chariot"];
      this.numChariots = values["num_chariots"];
      this.reload = values["reload"];
      this.looseSpacing = !!values["loose_spacing"];
      this._spottingAndHiding = values["spotting_and_hiding"];
      this._selectionVo = values["selection_vo"];
      this._selectedVoSecondary = values["selected_vo_secondary"];
      this._selectedVoTertiary = values["selected_vo_tertiary"];
      this.hidingScalar = values["hiding_scalar"];
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
    
    get manEntity(): BattleEntities.Entry | undefined {
      const collection = <BattleEntities.Entry[]>this.collectionCache.getCollection(BattleEntities.KEY, BattleEntities.Entry);
      return collection.find(entry => entry.key === this._manEntity);
    }
    
    get manAnimation(): BattleAnimationsTable.Entry | undefined {
      const collection = <BattleAnimationsTable.Entry[]>this.collectionCache.getCollection(BattleAnimationsTable.KEY, BattleAnimationsTable.Entry);
      return collection.find(entry => entry.key === this._manAnimation);
    }
    
    get mount(): Mounts.Entry | undefined {
      const collection = <Mounts.Entry[]>this.collectionCache.getCollection(Mounts.KEY, Mounts.Entry);
      return collection.find(entry => entry.key === this._mount);
    }
    
    get animal(): Animals.Entry | undefined {
      const collection = <Animals.Entry[]>this.collectionCache.getCollection(Animals.KEY, Animals.Entry);
      return collection.find(entry => entry.key === this._animal);
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
    
    get engine(): BattlefieldEngines.Entry | undefined {
      const collection = <BattlefieldEngines.Entry[]>this.collectionCache.getCollection(BattlefieldEngines.KEY, BattlefieldEngines.Entry);
      return collection.find(entry => entry.key === this._engine);
    }
    
    get articulatedRecord(): LandUnitArticulatedVehicles.Entry | undefined {
      const collection = <LandUnitArticulatedVehicles.Entry[]>this.collectionCache.getCollection(LandUnitArticulatedVehicles.KEY, LandUnitArticulatedVehicles.Entry);
      return collection.find(entry => entry.key === this._articulatedRecord);
    }
    
    get attributeGroup(): UnitAttributesGroups.Entry | undefined {
      const collection = <UnitAttributesGroups.Entry[]>this.collectionCache.getCollection(UnitAttributesGroups.KEY, UnitAttributesGroups.Entry);
      return collection.find(entry => entry.groupName === this._attributeGroup);
    }
    
    get chariot(): BattlefieldChariots.Entry | undefined {
      const collection = <BattlefieldChariots.Entry[]>this.collectionCache.getCollection(BattlefieldChariots.KEY, BattlefieldChariots.Entry);
      return collection.find(entry => entry.key === this._chariot);
    }
    
    get spottingAndHiding(): SpottingAndHidingValues.Entry | undefined {
      const collection = <SpottingAndHidingValues.Entry[]>this.collectionCache.getCollection(SpottingAndHidingValues.KEY, SpottingAndHidingValues.Entry);
      return collection.find(entry => entry.key === this._spottingAndHiding);
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
  }
}

export default LandUnits;
