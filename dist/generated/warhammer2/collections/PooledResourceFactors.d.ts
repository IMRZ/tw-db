import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace PooledResourceFactors {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly minimum: number;
        readonly maximum: number;
        readonly displayNameNegative: string;
        readonly displayNamePositive: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default PooledResourceFactors;
