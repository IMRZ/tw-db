
import { CollectionCache, CollectionKey } from "../../../common";
import { RegionGroups } from "./RegionGroups";
import { Provinces } from "./Provinces";

export namespace ProvincesToRegionGroupsJunctions {
  export const KEY = new CollectionKey("provinces_to_region_groups_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _regionGroup: string;
    readonly _province: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._regionGroup = values["region_group"];
      this._province = values["province"];
    }
    
    get regionGroup(): RegionGroups.Entry | undefined {
      const collection = <RegionGroups.Entry[]>this.collectionCache.getCollection(RegionGroups.KEY, RegionGroups.Entry);
      return collection.find(entry => entry.groupKey === this._regionGroup);
    }
    
    get province(): Provinces.Entry | undefined {
      const collection = <Provinces.Entry[]>this.collectionCache.getCollection(Provinces.KEY, Provinces.Entry);
      return collection.find(entry => entry.key === this._province);
    }
  }
}

export default ProvincesToRegionGroupsJunctions;
