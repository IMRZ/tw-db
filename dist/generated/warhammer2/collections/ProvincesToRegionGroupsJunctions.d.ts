import { CollectionCache, CollectionKey } from "../../../common";
import { RegionGroups } from "./RegionGroups";
import { Provinces } from "./Provinces";
export declare namespace ProvincesToRegionGroupsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _regionGroup: string;
        readonly _province: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly regionGroup: RegionGroups.Entry | undefined;
        readonly province: Provinces.Entry | undefined;
    }
}
export default ProvincesToRegionGroupsJunctions;
