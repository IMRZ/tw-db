import { CollectionCache, CollectionKey } from "../../../common";
import { ResourceCosts } from "./ResourceCosts";
import { PooledResourceFactorJunctions } from "./PooledResourceFactorJunctions";
export declare namespace ResourceCostPooledResourceJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _resourceCost: string;
        readonly _pooledResourceFactor: string;
        readonly amount: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly resourceCost: ResourceCosts.Entry | undefined;
        readonly pooledResourceFactor: PooledResourceFactorJunctions.Entry | undefined;
    }
}
export default ResourceCostPooledResourceJunctions;
