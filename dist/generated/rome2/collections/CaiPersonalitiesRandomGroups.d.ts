import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CaiPersonalitiesRandomGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly randomPersonalityGroupKey: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CaiPersonalitiesRandomGroups;
