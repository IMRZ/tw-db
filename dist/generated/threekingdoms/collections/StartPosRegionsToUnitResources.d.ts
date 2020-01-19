import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosRegions } from "./StartPosRegions";
import { RegionUnitResources } from "./RegionUnitResources";
export declare namespace StartPosRegionsToUnitResources {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: number;
        readonly _resource: string;
        readonly unique: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get key(): StartPosRegions.Entry | undefined;
        get resource(): RegionUnitResources.Entry | undefined;
    }
}
export default StartPosRegionsToUnitResources;
