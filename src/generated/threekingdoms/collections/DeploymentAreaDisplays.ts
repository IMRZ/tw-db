
import { CollectionCache, CollectionKey } from "../../../common";
import { ParticleEffects } from "./ParticleEffects";
import { CustomSplines } from "./CustomSplines";

export namespace DeploymentAreaDisplays {
  export const KEY = new CollectionKey("deployment_area_displays");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _vfx: string;
    readonly vfxStepSize: number;
    readonly _customSpline: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._vfx = values["vfx"];
      this.vfxStepSize = values["vfx_step_size"];
      this._customSpline = values["custom_spline"];
    }
    
    get vfx(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._vfx);
    }
    
    get customSpline(): CustomSplines.Entry | undefined {
      const collection = <CustomSplines.Entry[]>this.collectionCache.getCollection(CustomSplines.KEY, CustomSplines.Entry);
      return collection.find(entry => entry.key === this._customSpline);
    }
  }
}

export default DeploymentAreaDisplays;
