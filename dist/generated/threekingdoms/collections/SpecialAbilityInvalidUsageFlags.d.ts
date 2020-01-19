import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace SpecialAbilityInvalidUsageFlags {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly flagKey: string;
        readonly flagDescription: string;
        readonly altDescription: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default SpecialAbilityInvalidUsageFlags;
