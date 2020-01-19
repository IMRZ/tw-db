
import { CollectionCache, CollectionKey } from "../../../common";
import { ParticleEffects } from "./ParticleEffects";
import { CustomSplines } from "./CustomSplines";

export namespace AreaOfEffectDisplays {
  export const KEY = new CollectionKey("area_of_effect_displays");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly decal: string;
    readonly _vfxRing: string;
    readonly _vfxCentral: string;
    readonly splineColR: number;
    readonly splineColG: number;
    readonly splineColB: number;
    readonly splineOorColR: number;
    readonly splineOorColG: number;
    readonly splineOorColB: number;
    readonly splineAnimationSpeed: number;
    readonly splineTileCount: number;
    readonly compositeScene: string;
    readonly isTargettingPerEntity: boolean;
    readonly vfxRingSegmentLength: number;
    readonly _customSpline: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.decal = values["decal"];
      this._vfxRing = values["vfx_ring"];
      this._vfxCentral = values["vfx_central"];
      this.splineColR = values["spline_col_r"];
      this.splineColG = values["spline_col_g"];
      this.splineColB = values["spline_col_b"];
      this.splineOorColR = values["spline_oor_col_r"];
      this.splineOorColG = values["spline_oor_col_g"];
      this.splineOorColB = values["spline_oor_col_b"];
      this.splineAnimationSpeed = values["spline_animation_speed"];
      this.splineTileCount = values["spline_tile_count"];
      this.compositeScene = values["composite_scene"];
      this.isTargettingPerEntity = !!values["is_targetting_per_entity"];
      this.vfxRingSegmentLength = values["vfx_ring_segment_length"];
      this._customSpline = values["custom_spline"];
    }
    
    get vfxRing(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._vfxRing);
    }
    
    get vfxCentral(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._vfxCentral);
    }
    
    get customSpline(): CustomSplines.Entry | undefined {
      const collection = <CustomSplines.Entry[]>this.collectionCache.getCollection(CustomSplines.KEY, CustomSplines.Entry);
      return collection.find(entry => entry.key === this._customSpline);
    }
  }
}

export default AreaOfEffectDisplays;
