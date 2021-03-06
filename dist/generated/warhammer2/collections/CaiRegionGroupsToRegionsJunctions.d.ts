import { CollectionCache, CollectionKey } from "../../../common";
import { CaiRegionGroups } from "./CaiRegionGroups";
import { Regions } from "./Regions";
export declare namespace CaiRegionGroupsToRegionsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _regionGroupKey: string;
        readonly _regionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get regionGroupKey(): CaiRegionGroups.Entry | undefined;
        get regionKey(): Regions.Entry | undefined;
    }
}
export default CaiRegionGroupsToRegionsJunctions;
