
import { CollectionCache, CollectionKey } from "../../../common";
import { Projectiles } from "./Projectiles";
import { ProjectileBombardmentLaunchSources } from "./ProjectileBombardmentLaunchSources";
import { ParticleEffects } from "./ParticleEffects";
import { AudioProjectileBombardments } from "./AudioProjectileBombardments";

export namespace ProjectileBombardments {
  export const KEY = new CollectionKey("projectile_bombardments");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly bombardmentKey: string;
    readonly _projectileType: string;
    readonly numProjectiles: number;
    readonly startTime: number;
    readonly arrivalWindow: number;
    readonly radiusSpread: number;
    readonly _launchSource: string;
    readonly _launchVfx: string;
    readonly launchHeight: number;
    readonly _audioType: string;
    readonly launchHeightUnderground: number;
    readonly randomiseLaunch: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.bombardmentKey = values["bombardment_key"];
      this._projectileType = values["projectile_type"];
      this.numProjectiles = values["num_projectiles"];
      this.startTime = values["start_time"];
      this.arrivalWindow = values["arrival_window"];
      this.radiusSpread = values["radius_spread"];
      this._launchSource = values["launch_source"];
      this._launchVfx = values["launch_vfx"];
      this.launchHeight = values["launch_height"];
      this._audioType = values["audio_type"];
      this.launchHeightUnderground = values["launch_height_underground"];
      this.randomiseLaunch = !!values["randomise_launch"];
    }
    
    get projectileType(): Projectiles.Entry | undefined {
      const collection = <Projectiles.Entry[]>this.collectionCache.getCollection(Projectiles.KEY, Projectiles.Entry);
      return collection.find(entry => entry.key === this._projectileType);
    }
    
    get launchSource(): ProjectileBombardmentLaunchSources.Entry | undefined {
      const collection = <ProjectileBombardmentLaunchSources.Entry[]>this.collectionCache.getCollection(ProjectileBombardmentLaunchSources.KEY, ProjectileBombardmentLaunchSources.Entry);
      return collection.find(entry => entry.suggestedLaunchSource === this._launchSource);
    }
    
    get launchVfx(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._launchVfx);
    }
    
    get audioType(): AudioProjectileBombardments.Entry | undefined {
      const collection = <AudioProjectileBombardments.Entry[]>this.collectionCache.getCollection(AudioProjectileBombardments.KEY, AudioProjectileBombardments.Entry);
      return collection.find(entry => entry.key === this._audioType);
    }
  }
}

export default ProjectileBombardments;
