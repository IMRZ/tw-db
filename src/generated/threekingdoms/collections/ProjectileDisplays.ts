
import { CollectionCache, CollectionKey } from "../../../common";
import { ParticleEffects } from "./ParticleEffects";
import { ProjectileImpacts } from "./ProjectileImpacts";
import { BattleCameraShakeParameters } from "./BattleCameraShakeParameters";

export namespace ProjectileDisplays {
  export const KEY = new CollectionKey("projectile_displays");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly displayModel: string;
    readonly _launchFx: string;
    readonly _trailFx: string;
    readonly _stationaryFx: string;
    readonly _impact: string;
    readonly airborneAnim: string;
    readonly landingAnim: string;
    readonly tipOffset: number;
    readonly trailSpin: boolean;
    readonly _launchCameraShake: string;
    readonly _impactBounce: string;
    readonly _impactPenetrate: string;
    readonly _impactBlood: string;
    readonly _impactBounceBlood: string;
    readonly _impactPenetrateBlood: string;
    readonly displayModelBlood: string;
    readonly _trailFxBlood: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.displayModel = values["display_model"];
      this._launchFx = values["launch_fx"];
      this._trailFx = values["trail_fx"];
      this._stationaryFx = values["stationary_fx"];
      this._impact = values["impact"];
      this.airborneAnim = values["airborne_anim"];
      this.landingAnim = values["landing_anim"];
      this.tipOffset = values["tip_offset"];
      this.trailSpin = !!values["trail_spin"];
      this._launchCameraShake = values["launch_camera_shake"];
      this._impactBounce = values["impact_bounce"];
      this._impactPenetrate = values["impact_penetrate"];
      this._impactBlood = values["impact_blood"];
      this._impactBounceBlood = values["impact_bounce_blood"];
      this._impactPenetrateBlood = values["impact_penetrate_blood"];
      this.displayModelBlood = values["display_model_blood"];
      this._trailFxBlood = values["trail_fx_blood"];
    }
    
    get launchFx(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._launchFx);
    }
    
    get trailFx(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._trailFx);
    }
    
    get stationaryFx(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._stationaryFx);
    }
    
    get impact(): ProjectileImpacts.Entry | undefined {
      const collection = <ProjectileImpacts.Entry[]>this.collectionCache.getCollection(ProjectileImpacts.KEY, ProjectileImpacts.Entry);
      return collection.find(entry => entry.key === this._impact);
    }
    
    get launchCameraShake(): BattleCameraShakeParameters.Entry | undefined {
      const collection = <BattleCameraShakeParameters.Entry[]>this.collectionCache.getCollection(BattleCameraShakeParameters.KEY, BattleCameraShakeParameters.Entry);
      return collection.find(entry => entry.key === this._launchCameraShake);
    }
    
    get impactBounce(): ProjectileImpacts.Entry | undefined {
      const collection = <ProjectileImpacts.Entry[]>this.collectionCache.getCollection(ProjectileImpacts.KEY, ProjectileImpacts.Entry);
      return collection.find(entry => entry.key === this._impactBounce);
    }
    
    get impactPenetrate(): ProjectileImpacts.Entry | undefined {
      const collection = <ProjectileImpacts.Entry[]>this.collectionCache.getCollection(ProjectileImpacts.KEY, ProjectileImpacts.Entry);
      return collection.find(entry => entry.key === this._impactPenetrate);
    }
    
    get impactBlood(): ProjectileImpacts.Entry | undefined {
      const collection = <ProjectileImpacts.Entry[]>this.collectionCache.getCollection(ProjectileImpacts.KEY, ProjectileImpacts.Entry);
      return collection.find(entry => entry.key === this._impactBlood);
    }
    
    get impactBounceBlood(): ProjectileImpacts.Entry | undefined {
      const collection = <ProjectileImpacts.Entry[]>this.collectionCache.getCollection(ProjectileImpacts.KEY, ProjectileImpacts.Entry);
      return collection.find(entry => entry.key === this._impactBounceBlood);
    }
    
    get impactPenetrateBlood(): ProjectileImpacts.Entry | undefined {
      const collection = <ProjectileImpacts.Entry[]>this.collectionCache.getCollection(ProjectileImpacts.KEY, ProjectileImpacts.Entry);
      return collection.find(entry => entry.key === this._impactPenetrateBlood);
    }
    
    get trailFxBlood(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._trailFxBlood);
    }
  }
}

export default ProjectileDisplays;
