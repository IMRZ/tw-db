
import { CollectionCache, CollectionKey } from "../../../common";
import { WarscapeRigid } from "./WarscapeRigid";
import { ParticleEffects } from "./ParticleEffects";
import { ProjectileImpacts } from "./ProjectileImpacts";

export namespace ProjectileDisplays {
  export const KEY = new CollectionKey("projectile_displays");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _displayModel: string;
    readonly _damagedDisplayModel: string;
    readonly _launchFx: string;
    readonly _trailFx: string;
    readonly _stationaryFx: string;
    readonly _impact: string;
    readonly skeleton: string;
    readonly airborneAnim: string;
    readonly landingAnim: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._displayModel = values["display_model"];
      this._damagedDisplayModel = values["damaged_display_model"];
      this._launchFx = values["launch_fx"];
      this._trailFx = values["trail_fx"];
      this._stationaryFx = values["stationary_fx"];
      this._impact = values["impact"];
      this.skeleton = values["skeleton"];
      this.airborneAnim = values["airborne_anim"];
      this.landingAnim = values["landing_anim"];
    }
    
    get displayModel(): WarscapeRigid.Entry | undefined {
      const collection = <WarscapeRigid.Entry[]>this.collectionCache.getCollection(WarscapeRigid.KEY, WarscapeRigid.Entry);
      return collection.find(entry => entry.key === this._displayModel);
    }
    
    get damagedDisplayModel(): WarscapeRigid.Entry | undefined {
      const collection = <WarscapeRigid.Entry[]>this.collectionCache.getCollection(WarscapeRigid.KEY, WarscapeRigid.Entry);
      return collection.find(entry => entry.key === this._damagedDisplayModel);
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
  }
}

export default ProjectileDisplays;
