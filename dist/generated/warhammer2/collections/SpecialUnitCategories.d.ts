import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace SpecialUnitCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly category: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default SpecialUnitCategories;
