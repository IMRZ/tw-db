
import { CollectionCache, CollectionKey } from "../../../common";
import { MissionCategoryThresholds } from "./MissionCategoryThresholds";
import { CulturesSubcultures } from "./CulturesSubcultures";

export namespace MissionCategoryThresholdValidSubcultures {
  export const KEY = new CollectionKey("mission_category_threshold_valid_subcultures");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _threshold: string;
    readonly _subculture: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._threshold = values["threshold"];
      this._subculture = values["subculture"];
    }
    
    get threshold(): MissionCategoryThresholds.Entry | undefined {
      const collection = <MissionCategoryThresholds.Entry[]>this.collectionCache.getCollection(MissionCategoryThresholds.KEY, MissionCategoryThresholds.Entry);
      return collection.find(entry => entry.key === this._threshold);
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
  }
}

export default MissionCategoryThresholdValidSubcultures;
