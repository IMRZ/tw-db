
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitAbilities } from "./UnitAbilities";
import { Projectiles } from "./Projectiles";
import { SpecialAbilitiesSpecificBehaviourTypes } from "./SpecialAbilitiesSpecificBehaviourTypes";
import { ProjectileBombardments } from "./ProjectileBombardments";
import { LandUnits } from "./LandUnits";
import { BattleVortexs } from "./BattleVortexs";
import { SpecialAbilityStanceEnums } from "./SpecialAbilityStanceEnums";
import { AreaOfEffectDisplays } from "./AreaOfEffectDisplays";
import { ParticleEffects } from "./ParticleEffects";
import { ProjectilesExplosions } from "./ProjectilesExplosions";
import { BattleAiAbilitiesUsageTemplateNames } from "./BattleAiAbilitiesUsageTemplateNames";
import { AudioAbilities } from "./AudioAbilities";
import { SpecialAbilityDisplays } from "./SpecialAbilityDisplays";
import { AudioVoBattleSpecialAbilityStates } from "./AudioVoBattleSpecialAbilityStates";
import { SpecialAbilitySpawnTypes } from "./SpecialAbilitySpawnTypes";
import { BattleVortexCompositeSceneGroups } from "./BattleVortexCompositeSceneGroups";

export namespace UnitSpecialAbilities {
  export const KEY = new CollectionKey("unit_special_abilities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly numUses: number;
    readonly activeTime: number;
    readonly rechargeTime: number;
    readonly initialRecharge: number;
    readonly windUpTime: number;
    readonly passive: boolean;
    readonly effectRange: number;
    readonly affectSelf: boolean;
    readonly numEffectedFriendlyUnits: number;
    readonly numEffectedEnemyUnits: number;
    readonly updateTargetsEveryFrame: boolean;
    readonly _activatedProjectile: string;
    readonly targetFriends: boolean;
    readonly targetEnemies: boolean;
    readonly targetGround: boolean;
    readonly targetInterceptRange: number;
    readonly _assumeSpecificBehaviour: string;
    readonly clearCurrentOrder: boolean;
    readonly uniqueId: number;
    readonly _bombardment: string;
    readonly _spawnedUnit: string;
    readonly _vortex: string;
    readonly _windUpStance: string;
    readonly manaCost: number;
    readonly minRange: number;
    readonly _targettingAoe: string;
    readonly _passiveAoe: string;
    readonly _activeAoe: string;
    readonly _activationEffect: string;
    readonly miscastChance: number;
    readonly _miscastExplosion: string;
    readonly _aiUsage: string;
    readonly _audio: string;
    readonly _specialAbilityDisplay: string;
    readonly _voiceoverState: string;
    readonly additionalMeleeCp: number;
    readonly additionalMissileCp: number;
    readonly _parentAbility: string;
    readonly _spawnType: string;
    readonly _spawnProxyVfx: string;
    readonly targetGroundUnderAllies: boolean;
    readonly targetGroundUnderEnemies: boolean;
    readonly miscastGlobalBonus: boolean;
    readonly targetSelf: boolean;
    readonly _compositeSceneGroupOnWindUp: string;
    readonly _compositeSceneGroupOnActive: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this.numUses = values["num_uses"];
      this.activeTime = values["active_time"];
      this.rechargeTime = values["recharge_time"];
      this.initialRecharge = values["initial_recharge"];
      this.windUpTime = values["wind_up_time"];
      this.passive = !!values["passive"];
      this.effectRange = values["effect_range"];
      this.affectSelf = !!values["affect_self"];
      this.numEffectedFriendlyUnits = values["num_effected_friendly_units"];
      this.numEffectedEnemyUnits = values["num_effected_enemy_units"];
      this.updateTargetsEveryFrame = !!values["update_targets_every_frame"];
      this._activatedProjectile = values["activated_projectile"];
      this.targetFriends = !!values["target_friends"];
      this.targetEnemies = !!values["target_enemies"];
      this.targetGround = !!values["target_ground"];
      this.targetInterceptRange = values["target_intercept_range"];
      this._assumeSpecificBehaviour = values["assume_specific_behaviour"];
      this.clearCurrentOrder = !!values["clear_current_order"];
      this.uniqueId = values["unique_id"];
      this._bombardment = values["bombardment"];
      this._spawnedUnit = values["spawned_unit"];
      this._vortex = values["vortex"];
      this._windUpStance = values["wind_up_stance"];
      this.manaCost = values["mana_cost"];
      this.minRange = values["min_range"];
      this._targettingAoe = values["targetting_aoe"];
      this._passiveAoe = values["passive_aoe"];
      this._activeAoe = values["active_aoe"];
      this._activationEffect = values["activation_effect"];
      this.miscastChance = values["miscast_chance"];
      this._miscastExplosion = values["miscast_explosion"];
      this._aiUsage = values["ai_usage"];
      this._audio = values["audio"];
      this._specialAbilityDisplay = values["special_ability_display"];
      this._voiceoverState = values["voiceover_state"];
      this.additionalMeleeCp = values["additional_melee_cp"];
      this.additionalMissileCp = values["additional_missile_cp"];
      this._parentAbility = values["parent_ability"];
      this._spawnType = values["spawn_type"];
      this._spawnProxyVfx = values["spawn_proxy_vfx"];
      this.targetGroundUnderAllies = !!values["target_ground_under_allies"];
      this.targetGroundUnderEnemies = !!values["target_ground_under_enemies"];
      this.miscastGlobalBonus = !!values["miscast_global_bonus"];
      this.targetSelf = !!values["target_self"];
      this._compositeSceneGroupOnWindUp = values["composite_scene_group_on_wind_up"];
      this._compositeSceneGroupOnActive = values["composite_scene_group_on_active"];
    }
    
    get key(): UnitAbilities.Entry | undefined {
      const collection = <UnitAbilities.Entry[]>this.collectionCache.getCollection(UnitAbilities.KEY, UnitAbilities.Entry);
      return collection.find(entry => entry.key === this._key);
    }
    
    get activatedProjectile(): Projectiles.Entry | undefined {
      const collection = <Projectiles.Entry[]>this.collectionCache.getCollection(Projectiles.KEY, Projectiles.Entry);
      return collection.find(entry => entry.key === this._activatedProjectile);
    }
    
    get assumeSpecificBehaviour(): SpecialAbilitiesSpecificBehaviourTypes.Entry | undefined {
      const collection = <SpecialAbilitiesSpecificBehaviourTypes.Entry[]>this.collectionCache.getCollection(SpecialAbilitiesSpecificBehaviourTypes.KEY, SpecialAbilitiesSpecificBehaviourTypes.Entry);
      return collection.find(entry => entry.key === this._assumeSpecificBehaviour);
    }
    
    get bombardment(): ProjectileBombardments.Entry | undefined {
      const collection = <ProjectileBombardments.Entry[]>this.collectionCache.getCollection(ProjectileBombardments.KEY, ProjectileBombardments.Entry);
      return collection.find(entry => entry.bombardmentKey === this._bombardment);
    }
    
    get spawnedUnit(): LandUnits.Entry | undefined {
      const collection = <LandUnits.Entry[]>this.collectionCache.getCollection(LandUnits.KEY, LandUnits.Entry);
      return collection.find(entry => entry.key === this._spawnedUnit);
    }
    
    get vortex(): BattleVortexs.Entry | undefined {
      const collection = <BattleVortexs.Entry[]>this.collectionCache.getCollection(BattleVortexs.KEY, BattleVortexs.Entry);
      return collection.find(entry => entry.vortexKey === this._vortex);
    }
    
    get windUpStance(): SpecialAbilityStanceEnums.Entry | undefined {
      const collection = <SpecialAbilityStanceEnums.Entry[]>this.collectionCache.getCollection(SpecialAbilityStanceEnums.KEY, SpecialAbilityStanceEnums.Entry);
      return collection.find(entry => entry.key === this._windUpStance);
    }
    
    get targettingAoe(): AreaOfEffectDisplays.Entry | undefined {
      const collection = <AreaOfEffectDisplays.Entry[]>this.collectionCache.getCollection(AreaOfEffectDisplays.KEY, AreaOfEffectDisplays.Entry);
      return collection.find(entry => entry.key === this._targettingAoe);
    }
    
    get passiveAoe(): AreaOfEffectDisplays.Entry | undefined {
      const collection = <AreaOfEffectDisplays.Entry[]>this.collectionCache.getCollection(AreaOfEffectDisplays.KEY, AreaOfEffectDisplays.Entry);
      return collection.find(entry => entry.key === this._passiveAoe);
    }
    
    get activeAoe(): AreaOfEffectDisplays.Entry | undefined {
      const collection = <AreaOfEffectDisplays.Entry[]>this.collectionCache.getCollection(AreaOfEffectDisplays.KEY, AreaOfEffectDisplays.Entry);
      return collection.find(entry => entry.key === this._activeAoe);
    }
    
    get activationEffect(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._activationEffect);
    }
    
    get miscastExplosion(): ProjectilesExplosions.Entry | undefined {
      const collection = <ProjectilesExplosions.Entry[]>this.collectionCache.getCollection(ProjectilesExplosions.KEY, ProjectilesExplosions.Entry);
      return collection.find(entry => entry.key === this._miscastExplosion);
    }
    
    get aiUsage(): BattleAiAbilitiesUsageTemplateNames.Entry | undefined {
      const collection = <BattleAiAbilitiesUsageTemplateNames.Entry[]>this.collectionCache.getCollection(BattleAiAbilitiesUsageTemplateNames.KEY, BattleAiAbilitiesUsageTemplateNames.Entry);
      return collection.find(entry => entry.aiAbilityUsageTemplateKey === this._aiUsage);
    }
    
    get audio(): AudioAbilities.Entry | undefined {
      const collection = <AudioAbilities.Entry[]>this.collectionCache.getCollection(AudioAbilities.KEY, AudioAbilities.Entry);
      return collection.find(entry => entry.key === this._audio);
    }
    
    get specialAbilityDisplay(): SpecialAbilityDisplays.Entry | undefined {
      const collection = <SpecialAbilityDisplays.Entry[]>this.collectionCache.getCollection(SpecialAbilityDisplays.KEY, SpecialAbilityDisplays.Entry);
      return collection.find(entry => entry.saDisplayKey === this._specialAbilityDisplay);
    }
    
    get voiceoverState(): AudioVoBattleSpecialAbilityStates.Entry | undefined {
      const collection = <AudioVoBattleSpecialAbilityStates.Entry[]>this.collectionCache.getCollection(AudioVoBattleSpecialAbilityStates.KEY, AudioVoBattleSpecialAbilityStates.Entry);
      return collection.find(entry => entry.key === this._voiceoverState);
    }
    
    get parentAbility(): UnitSpecialAbilities.Entry | undefined {
      const collection = <UnitSpecialAbilities.Entry[]>this.collectionCache.getCollection(UnitSpecialAbilities.KEY, UnitSpecialAbilities.Entry);
      return collection.find(entry => entry._key === this._parentAbility);
    }
    
    get spawnType(): SpecialAbilitySpawnTypes.Entry | undefined {
      const collection = <SpecialAbilitySpawnTypes.Entry[]>this.collectionCache.getCollection(SpecialAbilitySpawnTypes.KEY, SpecialAbilitySpawnTypes.Entry);
      return collection.find(entry => entry.key === this._spawnType);
    }
    
    get spawnProxyVfx(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._spawnProxyVfx);
    }
    
    get compositeSceneGroupOnWindUp(): BattleVortexCompositeSceneGroups.Entry | undefined {
      const collection = <BattleVortexCompositeSceneGroups.Entry[]>this.collectionCache.getCollection(BattleVortexCompositeSceneGroups.KEY, BattleVortexCompositeSceneGroups.Entry);
      return collection.find(entry => entry.groupId === this._compositeSceneGroupOnWindUp);
    }
    
    get compositeSceneGroupOnActive(): BattleVortexCompositeSceneGroups.Entry | undefined {
      const collection = <BattleVortexCompositeSceneGroups.Entry[]>this.collectionCache.getCollection(BattleVortexCompositeSceneGroups.KEY, BattleVortexCompositeSceneGroups.Entry);
      return collection.find(entry => entry.groupId === this._compositeSceneGroupOnActive);
    }
  }
}

export default UnitSpecialAbilities;
