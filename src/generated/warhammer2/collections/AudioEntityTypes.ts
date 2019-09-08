
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioEntityRandomVocalisations } from "./AudioEntityRandomVocalisations";
import { AudioMaterials } from "./AudioMaterials";
import { AudioGroupSounds } from "./AudioGroupSounds";
import { AudioEntityTypeLimitations } from "./AudioEntityTypeLimitations";
import { AudioEntityLoopingSounds } from "./AudioEntityLoopingSounds";
import { AudioEntityActors } from "./AudioEntityActors";
import { TexcExpansions } from "./TexcExpansions";
import { AudioSphereOfInfluences } from "./AudioSphereOfInfluences";

export namespace AudioEntityTypes {
  export const KEY = new CollectionKey("audio_entity_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly switch: string;
    readonly _idleRandomVocalisation: string;
    readonly _runningRandomVocalisation: string;
    readonly _combatRandomVocalisation: string;
    readonly _fatiguedMovingRandomVocalisation: string;
    readonly _drowningRandomVocalisation: string;
    readonly musicianEvent: string;
    readonly _material: string;
    readonly _walkingRandomVocalisation: string;
    readonly _groupMovement: string;
    readonly _limitation: string;
    readonly _idleLoopingSound: string;
    readonly _movingLoopingSound: string;
    readonly _rotatingLoopingSound: string;
    readonly _actorType: string;
    readonly _fatiguedIdleRandomVocalisation: string;
    readonly _groupFlyingIdle: string;
    readonly _groupFlyingMoving: string;
    readonly onlyUsesMaterial: boolean;
    readonly _groupMovementArmourOverride: string;
    readonly _groupIdle: string;
    readonly attenuationScale: number;
    readonly _groupMeleeArmourOverride: string;
    readonly triggersCinematic: boolean;
    readonly _gameExpansionKey: string;
    readonly _sphereOfInfluenceDefault: string;
    readonly _sphereOfInfluenceCombat: string;
    readonly shouldUseUniqueEntitySwitches: boolean;
    readonly maxUniqueEntitySwitches: number;
    readonly uniqueEntitySwitch: string;
    readonly useFocusRtpc: boolean;
    readonly maxCameraDistanceForFocus: number;
    readonly minCameraDistanceForFocus: number;
    readonly focusRtpc: string;
    readonly ignoreMoving: boolean;
    readonly ignoreMovingOutsideCombat: boolean;
    readonly _groupIdleShoot: string;
    readonly _groupIdleCombatReady: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.switch = values["switch"];
      this._idleRandomVocalisation = values["idle_random_vocalisation"];
      this._runningRandomVocalisation = values["running_random_vocalisation"];
      this._combatRandomVocalisation = values["combat_random_vocalisation"];
      this._fatiguedMovingRandomVocalisation = values["fatigued_moving_random_vocalisation"];
      this._drowningRandomVocalisation = values["drowning_random_vocalisation"];
      this.musicianEvent = values["musician_event"];
      this._material = values["material"];
      this._walkingRandomVocalisation = values["walking_random_vocalisation"];
      this._groupMovement = values["group_movement"];
      this._limitation = values["limitation"];
      this._idleLoopingSound = values["idle_looping_sound"];
      this._movingLoopingSound = values["moving_looping_sound"];
      this._rotatingLoopingSound = values["rotating_looping_sound"];
      this._actorType = values["actor_type"];
      this._fatiguedIdleRandomVocalisation = values["fatigued_idle_random_vocalisation"];
      this._groupFlyingIdle = values["group_flying_idle"];
      this._groupFlyingMoving = values["group_flying_moving"];
      this.onlyUsesMaterial = !!values["only_uses_material"];
      this._groupMovementArmourOverride = values["group_movement_armour_override"];
      this._groupIdle = values["group_idle"];
      this.attenuationScale = values["attenuation_scale"];
      this._groupMeleeArmourOverride = values["group_melee_armour_override"];
      this.triggersCinematic = !!values["triggers_cinematic"];
      this._gameExpansionKey = values["game_expansion_key"];
      this._sphereOfInfluenceDefault = values["sphere_of_influence_default"];
      this._sphereOfInfluenceCombat = values["sphere_of_influence_combat"];
      this.shouldUseUniqueEntitySwitches = !!values["should_use_unique_entity_switches"];
      this.maxUniqueEntitySwitches = values["max_unique_entity_switches"];
      this.uniqueEntitySwitch = values["unique_entity_switch"];
      this.useFocusRtpc = !!values["use_focus_rtpc"];
      this.maxCameraDistanceForFocus = values["max_camera_distance_for_focus"];
      this.minCameraDistanceForFocus = values["min_camera_distance_for_focus"];
      this.focusRtpc = values["focus_rtpc"];
      this.ignoreMoving = !!values["ignore_moving"];
      this.ignoreMovingOutsideCombat = !!values["ignore_moving_outside_combat"];
      this._groupIdleShoot = values["group_idle_shoot"];
      this._groupIdleCombatReady = values["group_idle_combat_ready"];
    }
    
    get idleRandomVocalisation(): AudioEntityRandomVocalisations.Entry | undefined {
      const collection = <AudioEntityRandomVocalisations.Entry[]>this.collectionCache.getCollection(AudioEntityRandomVocalisations.KEY, AudioEntityRandomVocalisations.Entry);
      return collection.find(entry => entry.key === this._idleRandomVocalisation);
    }
    
    get runningRandomVocalisation(): AudioEntityRandomVocalisations.Entry | undefined {
      const collection = <AudioEntityRandomVocalisations.Entry[]>this.collectionCache.getCollection(AudioEntityRandomVocalisations.KEY, AudioEntityRandomVocalisations.Entry);
      return collection.find(entry => entry.key === this._runningRandomVocalisation);
    }
    
    get combatRandomVocalisation(): AudioEntityRandomVocalisations.Entry | undefined {
      const collection = <AudioEntityRandomVocalisations.Entry[]>this.collectionCache.getCollection(AudioEntityRandomVocalisations.KEY, AudioEntityRandomVocalisations.Entry);
      return collection.find(entry => entry.key === this._combatRandomVocalisation);
    }
    
    get fatiguedMovingRandomVocalisation(): AudioEntityRandomVocalisations.Entry | undefined {
      const collection = <AudioEntityRandomVocalisations.Entry[]>this.collectionCache.getCollection(AudioEntityRandomVocalisations.KEY, AudioEntityRandomVocalisations.Entry);
      return collection.find(entry => entry.key === this._fatiguedMovingRandomVocalisation);
    }
    
    get drowningRandomVocalisation(): AudioEntityRandomVocalisations.Entry | undefined {
      const collection = <AudioEntityRandomVocalisations.Entry[]>this.collectionCache.getCollection(AudioEntityRandomVocalisations.KEY, AudioEntityRandomVocalisations.Entry);
      return collection.find(entry => entry.key === this._drowningRandomVocalisation);
    }
    
    get material(): AudioMaterials.Entry | undefined {
      const collection = <AudioMaterials.Entry[]>this.collectionCache.getCollection(AudioMaterials.KEY, AudioMaterials.Entry);
      return collection.find(entry => entry.key === this._material);
    }
    
    get walkingRandomVocalisation(): AudioEntityRandomVocalisations.Entry | undefined {
      const collection = <AudioEntityRandomVocalisations.Entry[]>this.collectionCache.getCollection(AudioEntityRandomVocalisations.KEY, AudioEntityRandomVocalisations.Entry);
      return collection.find(entry => entry.key === this._walkingRandomVocalisation);
    }
    
    get groupMovement(): AudioGroupSounds.Entry | undefined {
      const collection = <AudioGroupSounds.Entry[]>this.collectionCache.getCollection(AudioGroupSounds.KEY, AudioGroupSounds.Entry);
      return collection.find(entry => entry.name === this._groupMovement);
    }
    
    get limitation(): AudioEntityTypeLimitations.Entry | undefined {
      const collection = <AudioEntityTypeLimitations.Entry[]>this.collectionCache.getCollection(AudioEntityTypeLimitations.KEY, AudioEntityTypeLimitations.Entry);
      return collection.find(entry => entry.key === this._limitation);
    }
    
    get idleLoopingSound(): AudioEntityLoopingSounds.Entry | undefined {
      const collection = <AudioEntityLoopingSounds.Entry[]>this.collectionCache.getCollection(AudioEntityLoopingSounds.KEY, AudioEntityLoopingSounds.Entry);
      return collection.find(entry => entry.key === this._idleLoopingSound);
    }
    
    get movingLoopingSound(): AudioEntityLoopingSounds.Entry | undefined {
      const collection = <AudioEntityLoopingSounds.Entry[]>this.collectionCache.getCollection(AudioEntityLoopingSounds.KEY, AudioEntityLoopingSounds.Entry);
      return collection.find(entry => entry.key === this._movingLoopingSound);
    }
    
    get rotatingLoopingSound(): AudioEntityLoopingSounds.Entry | undefined {
      const collection = <AudioEntityLoopingSounds.Entry[]>this.collectionCache.getCollection(AudioEntityLoopingSounds.KEY, AudioEntityLoopingSounds.Entry);
      return collection.find(entry => entry.key === this._rotatingLoopingSound);
    }
    
    get actorType(): AudioEntityActors.Entry | undefined {
      const collection = <AudioEntityActors.Entry[]>this.collectionCache.getCollection(AudioEntityActors.KEY, AudioEntityActors.Entry);
      return collection.find(entry => entry.key === this._actorType);
    }
    
    get fatiguedIdleRandomVocalisation(): AudioEntityRandomVocalisations.Entry | undefined {
      const collection = <AudioEntityRandomVocalisations.Entry[]>this.collectionCache.getCollection(AudioEntityRandomVocalisations.KEY, AudioEntityRandomVocalisations.Entry);
      return collection.find(entry => entry.key === this._fatiguedIdleRandomVocalisation);
    }
    
    get groupFlyingIdle(): AudioGroupSounds.Entry | undefined {
      const collection = <AudioGroupSounds.Entry[]>this.collectionCache.getCollection(AudioGroupSounds.KEY, AudioGroupSounds.Entry);
      return collection.find(entry => entry.name === this._groupFlyingIdle);
    }
    
    get groupFlyingMoving(): AudioGroupSounds.Entry | undefined {
      const collection = <AudioGroupSounds.Entry[]>this.collectionCache.getCollection(AudioGroupSounds.KEY, AudioGroupSounds.Entry);
      return collection.find(entry => entry.name === this._groupFlyingMoving);
    }
    
    get groupMovementArmourOverride(): AudioGroupSounds.Entry | undefined {
      const collection = <AudioGroupSounds.Entry[]>this.collectionCache.getCollection(AudioGroupSounds.KEY, AudioGroupSounds.Entry);
      return collection.find(entry => entry.name === this._groupMovementArmourOverride);
    }
    
    get groupIdle(): AudioGroupSounds.Entry | undefined {
      const collection = <AudioGroupSounds.Entry[]>this.collectionCache.getCollection(AudioGroupSounds.KEY, AudioGroupSounds.Entry);
      return collection.find(entry => entry.name === this._groupIdle);
    }
    
    get groupMeleeArmourOverride(): AudioGroupSounds.Entry | undefined {
      const collection = <AudioGroupSounds.Entry[]>this.collectionCache.getCollection(AudioGroupSounds.KEY, AudioGroupSounds.Entry);
      return collection.find(entry => entry.name === this._groupMeleeArmourOverride);
    }
    
    get gameExpansionKey(): TexcExpansions.Entry | undefined {
      const collection = <TexcExpansions.Entry[]>this.collectionCache.getCollection(TexcExpansions.KEY, TexcExpansions.Entry);
      return collection.find(entry => entry.expansion === this._gameExpansionKey);
    }
    
    get sphereOfInfluenceDefault(): AudioSphereOfInfluences.Entry | undefined {
      const collection = <AudioSphereOfInfluences.Entry[]>this.collectionCache.getCollection(AudioSphereOfInfluences.KEY, AudioSphereOfInfluences.Entry);
      return collection.find(entry => entry.key === this._sphereOfInfluenceDefault);
    }
    
    get sphereOfInfluenceCombat(): AudioSphereOfInfluences.Entry | undefined {
      const collection = <AudioSphereOfInfluences.Entry[]>this.collectionCache.getCollection(AudioSphereOfInfluences.KEY, AudioSphereOfInfluences.Entry);
      return collection.find(entry => entry.key === this._sphereOfInfluenceCombat);
    }
    
    get groupIdleShoot(): AudioGroupSounds.Entry | undefined {
      const collection = <AudioGroupSounds.Entry[]>this.collectionCache.getCollection(AudioGroupSounds.KEY, AudioGroupSounds.Entry);
      return collection.find(entry => entry.name === this._groupIdleShoot);
    }
    
    get groupIdleCombatReady(): AudioGroupSounds.Entry | undefined {
      const collection = <AudioGroupSounds.Entry[]>this.collectionCache.getCollection(AudioGroupSounds.KEY, AudioGroupSounds.Entry);
      return collection.find(entry => entry.name === this._groupIdleCombatReady);
    }
  }
}

export default AudioEntityTypes;
