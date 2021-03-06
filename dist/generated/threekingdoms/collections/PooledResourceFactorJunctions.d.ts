import { CollectionCache, CollectionKey } from "../../../common";
import { PooledResources } from "./PooledResources";
import { PooledResourceFactors } from "./PooledResourceFactors";
export declare namespace PooledResourceFactorJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _resource: string;
        readonly _factor: string;
        readonly minimum: number;
        readonly maximum: number;
        readonly aiCanPropose: boolean;
        readonly isRecurringFactor: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get resource(): PooledResources.Entry | undefined;
        get factor(): PooledResourceFactors.Entry | undefined;
    }
}
export default PooledResourceFactorJunctions;
