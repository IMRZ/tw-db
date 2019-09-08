import { CollectionCache, CollectionKey } from "../../../common";
import { PooledResources } from "./PooledResources";
import { PooledResourceFactors } from "./PooledResourceFactors";
export declare namespace PooledResourceFactorJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _resource: string;
        readonly _factor: string;
        readonly uniqueId: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly resource: PooledResources.Entry | undefined;
        readonly factor: PooledResourceFactors.Entry | undefined;
    }
}
export default PooledResourceFactorJunctions;
