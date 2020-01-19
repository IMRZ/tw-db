
import { CollectionCache, CollectionKey } from "../../../common";
import { SplineTypes } from "./SplineTypes";

export namespace CustomSplines {
  export const KEY = new CollectionKey("custom_splines");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly material: string;
    readonly width: number;
    readonly adjustHeightToTerrain: boolean;
    readonly isVertical: boolean;
    readonly _splineType: string;
    readonly maxSubdivisions: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.material = values["material"];
      this.width = values["width"];
      this.adjustHeightToTerrain = !!values["adjust_height_to_terrain"];
      this.isVertical = !!values["is_vertical"];
      this._splineType = values["spline_type"];
      this.maxSubdivisions = values["max_subdivisions"];
    }
    
    get splineType(): SplineTypes.Entry | undefined {
      const collection = <SplineTypes.Entry[]>this.collectionCache.getCollection(SplineTypes.KEY, SplineTypes.Entry);
      return collection.find(entry => entry.key === this._splineType);
    }
  }
}

export default CustomSplines;
