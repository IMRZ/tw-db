import { CollectionCache, CollectionKey } from "../../../common";
import { PooledResources } from "./PooledResources";
import { PooledResourceFactors } from "./PooledResourceFactors";
export declare namespace PooledResourceOverflowDistributionFactors {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _pooledResource: string;
        readonly _targetFactor: string;
        constructor(collectionCache: CollectionCache, values: any);
        get pooledResource(): PooledResources.Entry | undefined;
        get targetFactor(): PooledResourceFactors.Entry | undefined;
    }
}
export default PooledResourceOverflowDistributionFactors;
