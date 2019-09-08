import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CaiPersonalitiesReliabilityPolicies {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly joinAllyBias: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CaiPersonalitiesReliabilityPolicies;
