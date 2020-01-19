import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace FactionResourcesRequirementSetOperators {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly operatorKey: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default FactionResourcesRequirementSetOperators;
