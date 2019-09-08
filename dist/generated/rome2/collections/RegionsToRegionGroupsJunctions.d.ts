import { CollectionCache, CollectionKey } from "../../../common";
import { RegionGroups } from "./RegionGroups";
import { Regions } from "./Regions";
export declare namespace RegionsToRegionGroupsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _regionGroup: string;
        readonly _region: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly regionGroup: RegionGroups.Entry | undefined;
        readonly region: Regions.Entry | undefined;
    }
}
export default RegionsToRegionGroupsJunctions;
