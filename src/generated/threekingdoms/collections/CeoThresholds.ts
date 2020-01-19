
import { CollectionCache, CollectionKey } from "../../../common";
import { Ceos } from "./Ceos";

export namespace CeoThresholds {
  export const KEY = new CollectionKey("ceo_thresholds");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _ceo: string;
    readonly pointThresholdToActivate: number;
    readonly pointThesholdToDestroy: number;
    readonly startingPoints: number;
    readonly maxPoints: number;
    readonly resetsToStartingPointsWhenDeactivated: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._ceo = values["ceo"];
      this.pointThresholdToActivate = values["point_threshold_to_activate"];
      this.pointThesholdToDestroy = values["point_theshold_to_destroy"];
      this.startingPoints = values["starting_points"];
      this.maxPoints = values["max_points"];
      this.resetsToStartingPointsWhenDeactivated = !!values["resets_to_starting_points_when_deactivated"];
    }
    
    get ceo(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._ceo);
    }
  }
}

export default CeoThresholds;
