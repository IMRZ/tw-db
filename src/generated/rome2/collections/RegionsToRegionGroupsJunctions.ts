
import { CollectionCache, CollectionKey } from "../../../common";
import { RegionGroups } from "./RegionGroups";
import { Regions } from "./Regions";

export namespace RegionsToRegionGroupsJunctions {
  export const KEY = new CollectionKey("regions_to_region_groups_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _regionGroup: string;
    readonly _region: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._regionGroup = values["region_group"];
      this._region = values["region"];
    }
    
    get regionGroup(): RegionGroups.Entry | undefined {
      const collection = <RegionGroups.Entry[]>this.collectionCache.getCollection(RegionGroups.KEY, RegionGroups.Entry);
      return collection.find(entry => entry.groupKey === this._regionGroup);
    }
    
    get region(): Regions.Entry | undefined {
      const collection = <Regions.Entry[]>this.collectionCache.getCollection(Regions.KEY, Regions.Entry);
      return collection.find(entry => entry.key === this._region);
    }
  }
}

export default RegionsToRegionGroupsJunctions;
