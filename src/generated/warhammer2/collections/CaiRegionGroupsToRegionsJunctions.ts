
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiRegionGroups } from "./CaiRegionGroups";
import { Regions } from "./Regions";

export namespace CaiRegionGroupsToRegionsJunctions {
  export const KEY = new CollectionKey("cai_region_groups_to_regions_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _regionGroupKey: string;
    readonly _regionKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._regionGroupKey = values["region_group_key"];
      this._regionKey = values["region_key"];
    }
    
    get regionGroupKey(): CaiRegionGroups.Entry | undefined {
      const collection = <CaiRegionGroups.Entry[]>this.collectionCache.getCollection(CaiRegionGroups.KEY, CaiRegionGroups.Entry);
      return collection.find(entry => entry.key === this._regionGroupKey);
    }
    
    get regionKey(): Regions.Entry | undefined {
      const collection = <Regions.Entry[]>this.collectionCache.getCollection(Regions.KEY, Regions.Entry);
      return collection.find(entry => entry.key === this._regionKey);
    }
  }
}

export default CaiRegionGroupsToRegionsJunctions;
