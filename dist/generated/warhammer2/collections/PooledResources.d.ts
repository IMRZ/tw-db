import { CollectionCache, CollectionKey } from "../../../common";
import { PooledResourceFactors } from "./PooledResourceFactors";
export declare namespace PooledResources {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly displayName: string;
        readonly minimum: number;
        readonly maximum: number;
        readonly persistentFactors: boolean;
        readonly positiveFactorsDisplayName: string;
        readonly negativeFactorsDisplayName: string;
        readonly description: string;
        readonly aiIgnored: boolean;
        readonly _defaultFactor: string;
        readonly optionalIconPath: string;
        constructor(collectionCache: CollectionCache, values: any);
        get defaultFactor(): PooledResourceFactors.Entry | undefined;
    }
}
export default PooledResources;
