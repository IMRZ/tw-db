
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitMeleeWeaponsEnum } from "./UnitMeleeWeaponsEnum";
import { AudioMeleeWeaponTypes } from "./AudioMeleeWeaponTypes";
import { BattleEntitiesSizeEnums } from "./BattleEntitiesSizeEnums";
import { SpecialAbilityPhases } from "./SpecialAbilityPhases";
import { ProjectilesScalingDamages } from "./ProjectilesScalingDamages";

export namespace MeleeWeapons {
  export const KEY = new CollectionKey("melee_weapons");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly damage: number;
    readonly apDamage: number;
    readonly firstStrike: number;
    readonly bonusVInfantry: number;
    readonly bonusVCavalry: number;
    readonly bonusVLarge: number;
    readonly weaponLength: number;
    readonly _meleeWeaponType: string;
    readonly _audioType: string;
    readonly _splashAttackTargetSize: string;
    readonly splashAttackMaxAttacks: number;
    readonly splashAttackPowerMultiplier: number;
    readonly buildingDamage: number;
    readonly ignitionAmount: number;
    readonly isMagical: boolean;
    readonly _contactPhase: string;
    readonly collisionAttackMaxTargets: number;
    readonly collisionAttackMaxTargetsCooldown: number;
    readonly meleeAttackInterval: number;
    readonly _scalingDamage: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.damage = values["damage"];
      this.apDamage = values["ap_damage"];
      this.firstStrike = values["first_strike"];
      this.bonusVInfantry = values["bonus_v_infantry"];
      this.bonusVCavalry = values["bonus_v_cavalry"];
      this.bonusVLarge = values["bonus_v_large"];
      this.weaponLength = values["weapon_length"];
      this._meleeWeaponType = values["melee_weapon_type"];
      this._audioType = values["audio_type"];
      this._splashAttackTargetSize = values["splash_attack_target_size"];
      this.splashAttackMaxAttacks = values["splash_attack_max_attacks"];
      this.splashAttackPowerMultiplier = values["splash_attack_power_multiplier"];
      this.buildingDamage = values["building_damage"];
      this.ignitionAmount = values["ignition_amount"];
      this.isMagical = !!values["is_magical"];
      this._contactPhase = values["contact_phase"];
      this.collisionAttackMaxTargets = values["collision_attack_max_targets"];
      this.collisionAttackMaxTargetsCooldown = values["collision_attack_max_targets_cooldown"];
      this.meleeAttackInterval = values["melee_attack_interval"];
      this._scalingDamage = values["scaling_damage"];
    }
    
    get meleeWeaponType(): UnitMeleeWeaponsEnum.Entry | undefined {
      const collection = <UnitMeleeWeaponsEnum.Entry[]>this.collectionCache.getCollection(UnitMeleeWeaponsEnum.KEY, UnitMeleeWeaponsEnum.Entry);
      return collection.find(entry => entry.key === this._meleeWeaponType);
    }
    
    get audioType(): AudioMeleeWeaponTypes.Entry | undefined {
      const collection = <AudioMeleeWeaponTypes.Entry[]>this.collectionCache.getCollection(AudioMeleeWeaponTypes.KEY, AudioMeleeWeaponTypes.Entry);
      return collection.find(entry => entry.key === this._audioType);
    }
    
    get splashAttackTargetSize(): BattleEntitiesSizeEnums.Entry | undefined {
      const collection = <BattleEntitiesSizeEnums.Entry[]>this.collectionCache.getCollection(BattleEntitiesSizeEnums.KEY, BattleEntitiesSizeEnums.Entry);
      return collection.find(entry => entry.key === this._splashAttackTargetSize);
    }
    
    get contactPhase(): SpecialAbilityPhases.Entry | undefined {
      const collection = <SpecialAbilityPhases.Entry[]>this.collectionCache.getCollection(SpecialAbilityPhases.KEY, SpecialAbilityPhases.Entry);
      return collection.find(entry => entry.id === this._contactPhase);
    }
    
    get scalingDamage(): ProjectilesScalingDamages.Entry | undefined {
      const collection = <ProjectilesScalingDamages.Entry[]>this.collectionCache.getCollection(ProjectilesScalingDamages.KEY, ProjectilesScalingDamages.Entry);
      return collection.find(entry => entry.key === this._scalingDamage);
    }
  }
}

export default MeleeWeapons;
