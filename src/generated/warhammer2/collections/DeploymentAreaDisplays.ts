
import { CollectionCache, CollectionKey } from "../../../common";
import { ParticleEffects } from "./ParticleEffects";

export namespace DeploymentAreaDisplays {
  export const KEY = new CollectionKey("deployment_area_displays");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _vfx: string;
    readonly vfxStepSize: number;
    readonly splineHeight: number;
    readonly material: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._vfx = values["vfx"];
      this.vfxStepSize = values["vfx_step_size"];
      this.splineHeight = values["spline_height"];
      this.material = values["material"];
    }
    
    get vfx(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._vfx);
    }
  }
}

export default DeploymentAreaDisplays;
