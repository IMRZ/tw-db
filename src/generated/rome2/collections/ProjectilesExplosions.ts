
import { CollectionCache, CollectionKey } from "../../../common";
import { ProjectilesDetonatorTypesEnum } from "./ProjectilesDetonatorTypesEnum";
import { ProjectilesDetonationTypesEnum } from "./ProjectilesDetonationTypesEnum";
import { Projectiles } from "./Projectiles";
import { ParticleEffects } from "./ParticleEffects";
import { AudioExplosionsEnums } from "./AudioExplosionsEnums";

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
    readonly _projectileName: string;
    readonly projectileAmount: number;
    readonly _explosionParticleEffect: string;
    readonly distanceFromTarget: number;
    readonly errorMargin: number;
    readonly nonLethalDetonation: boolean;
    readonly explosionParticleEffectOnGround: string;
    readonly _audioExplosionType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._detonatorType = values["detonator_type"];
      this._detonationType = values["detonation_type"];
      this.detonationRadius = values["detonation_radius"];
      this.detonationDuration = values["detonation_duration"];
      this.detonationSpeed = values["detonation_speed"];
      this.detonationDamage = values["detonation_damage"];
      this._projectileName = values["projectile_name"];
      this.projectileAmount = values["projectile_amount"];
      this._explosionParticleEffect = values["explosion_particle_effect"];
      this.distanceFromTarget = values["distance_from_target"];
      this.errorMargin = values["error_margin"];
      this.nonLethalDetonation = !!values["non_lethal_detonation"];
      this.explosionParticleEffectOnGround = values["explosion_particle_effect_on_ground"];
      this._audioExplosionType = values["audio_explosion_type"];
    }
    
    get detonatorType(): ProjectilesDetonatorTypesEnum.Entry | undefined {
      const collection = <ProjectilesDetonatorTypesEnum.Entry[]>this.collectionCache.getCollection(ProjectilesDetonatorTypesEnum.KEY, ProjectilesDetonatorTypesEnum.Entry);
      return collection.find(entry => entry.detonatorType === this._detonatorType);
    }
    
    get detonationType(): ProjectilesDetonationTypesEnum.Entry | undefined {
      const collection = <ProjectilesDetonationTypesEnum.Entry[]>this.collectionCache.getCollection(ProjectilesDetonationTypesEnum.KEY, ProjectilesDetonationTypesEnum.Entry);
      return collection.find(entry => entry.key === this._detonationType);
    }
    
    get projectileName(): Projectiles.Entry | undefined {
      const collection = <Projectiles.Entry[]>this.collectionCache.getCollection(Projectiles.KEY, Projectiles.Entry);
      return collection.find(entry => entry.key === this._projectileName);
    }
    
    get explosionParticleEffect(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._explosionParticleEffect);
    }
    
    get audioExplosionType(): AudioExplosionsEnums.Entry | undefined {
      const collection = <AudioExplosionsEnums.Entry[]>this.collectionCache.getCollection(AudioExplosionsEnums.KEY, AudioExplosionsEnums.Entry);
      return collection.find(entry => entry.key === this._audioExplosionType);
    }
  }
}

export default ProjectilesExplosions;
