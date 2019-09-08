
import { CollectionCache, CollectionKey } from "../../../common";
import { ProjectilesDetonatorTypesEnum } from "./ProjectilesDetonatorTypesEnum";
import { ProjectilesDetonationTypesEnum } from "./ProjectilesDetonationTypesEnum";
import { ProjectileShrapnels } from "./ProjectileShrapnels";
import { ParticleEffects } from "./ParticleEffects";
import { AudioExplosions } from "./AudioExplosions";
import { SpecialAbilityPhases } from "./SpecialAbilityPhases";
import { BattleCameraShakeParameters } from "./BattleCameraShakeParameters";

export namespace ProjectilesExplosions {
  export const KEY = new CollectionKey("projectiles_explosions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _detonatorType: string;
    readonly _detonationType: string;
    readonly detonationRadius: number;
    readonly detonationDuration: number;
    readonly detonationSpeed: number;
    readonly detonationDamage: number;
    readonly _shrapnel: string;
    readonly _explosionParticleEffect: string;
    readonly fuseDistanceFromTarget: number;
    readonly _explosionParticleEffectOnGround: string;
    readonly _explosionAudio: string;
    readonly _contactPhaseEffect: string;
    readonly ignitionAmount: number;
    readonly isMagical: boolean;
    readonly detonationDamageAp: number;
    readonly _cameraShake: string;
    readonly detonationForce: number;
    readonly fuseFixedTime: number;
    readonly affectsAllies: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._detonatorType = values["detonator_type"];
      this._detonationType = values["detonation_type"];
      this.detonationRadius = values["detonation_radius"];
      this.detonationDuration = values["detonation_duration"];
      this.detonationSpeed = values["detonation_speed"];
      this.detonationDamage = values["detonation_damage"];
      this._shrapnel = values["shrapnel"];
      this._explosionParticleEffect = values["explosion_particle_effect"];
      this.fuseDistanceFromTarget = values["fuse_distance_from_target"];
      this._explosionParticleEffectOnGround = values["explosion_particle_effect_on_ground"];
      this._explosionAudio = values["explosion_audio"];
      this._contactPhaseEffect = values["contact_phase_effect"];
      this.ignitionAmount = values["ignition_amount"];
      this.isMagical = !!values["is_magical"];
      this.detonationDamageAp = values["detonation_damage_ap"];
      this._cameraShake = values["camera_shake"];
      this.detonationForce = values["detonation_force"];
      this.fuseFixedTime = values["fuse_fixed_time"];
      this.affectsAllies = !!values["affects_allies"];
    }
    
    get detonatorType(): ProjectilesDetonatorTypesEnum.Entry | undefined {
      const collection = <ProjectilesDetonatorTypesEnum.Entry[]>this.collectionCache.getCollection(ProjectilesDetonatorTypesEnum.KEY, ProjectilesDetonatorTypesEnum.Entry);
      return collection.find(entry => entry.detonatorType === this._detonatorType);
    }
    
    get detonationType(): ProjectilesDetonationTypesEnum.Entry | undefined {
      const collection = <ProjectilesDetonationTypesEnum.Entry[]>this.collectionCache.getCollection(ProjectilesDetonationTypesEnum.KEY, ProjectilesDetonationTypesEnum.Entry);
      return collection.find(entry => entry.key === this._detonationType);
    }
    
    get shrapnel(): ProjectileShrapnels.Entry | undefined {
      const collection = <ProjectileShrapnels.Entry[]>this.collectionCache.getCollection(ProjectileShrapnels.KEY, ProjectileShrapnels.Entry);
      return collection.find(entry => entry.key === this._shrapnel);
    }
    
    get explosionParticleEffect(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._explosionParticleEffect);
    }
    
    get explosionParticleEffectOnGround(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._explosionParticleEffectOnGround);
    }
    
    get explosionAudio(): AudioExplosions.Entry | undefined {
      const collection = <AudioExplosions.Entry[]>this.collectionCache.getCollection(AudioExplosions.KEY, AudioExplosions.Entry);
      return collection.find(entry => entry.key === this._explosionAudio);
    }
    
    get contactPhaseEffect(): SpecialAbilityPhases.Entry | undefined {
      const collection = <SpecialAbilityPhases.Entry[]>this.collectionCache.getCollection(SpecialAbilityPhases.KEY, SpecialAbilityPhases.Entry);
      return collection.find(entry => entry.id === this._contactPhaseEffect);
    }
    
    get cameraShake(): BattleCameraShakeParameters.Entry | undefined {
      const collection = <BattleCameraShakeParameters.Entry[]>this.collectionCache.getCollection(BattleCameraShakeParameters.KEY, BattleCameraShakeParameters.Entry);
      return collection.find(entry => entry.key === this._cameraShake);
    }
  }
}

export default ProjectilesExplosions;
