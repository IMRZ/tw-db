import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AutoresolverModifierGroupKeys {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly groupKey: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AutoresolverModifierGroupKeys;
