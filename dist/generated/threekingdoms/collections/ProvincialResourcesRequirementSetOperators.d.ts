import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace ProvincialResourcesRequirementSetOperators {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly operatorKey: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default ProvincialResourcesRequirementSetOperators;
