import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosRegions } from "./StartPosRegions";
import { PooledResources } from "./PooledResources";
export declare namespace StartPosRegionPooledResources {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _region: number;
        readonly _pooledResource: string;
        readonly amount: number;
        constructor(collectionCache: CollectionCache, values: any);
        get region(): StartPosRegions.Entry | undefined;
        get pooledResource(): PooledResources.Entry | undefined;
    }
}
export default StartPosRegionPooledResources;
