
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SpottingAndHidingValues {
  export const KEY = new CollectionKey("spotting_and_hiding_values");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly visibilityMinSpotRange: number;
    readonly visibilityMaxSpotRange: number;
    readonly spotDistTree: number;
    readonly spotDistScrub: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.visibilityMinSpotRange = values["visibility_min_spot_range"];
      this.visibilityMaxSpotRange = values["visibility_max_spot_range"];
      this.spotDistTree = values["spot_dist_tree"];
      this.spotDistScrub = values["spot_dist_scrub"];
    }
    
  }
}

export default SpottingAndHidingValues;
