import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosRegions } from "./StartPosRegions";
import { RegionUnitResources } from "./RegionUnitResources";
export declare namespace StartPosRegionsToUnitResources {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: number;
        readonly _resource: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly key: StartPosRegions.Entry | undefined;
        readonly resource: RegionUnitResources.Entry | undefined;
    }
}
export default StartPosRegionsToUnitResources;
