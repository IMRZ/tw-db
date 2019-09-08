import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace WorkshopCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly category: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default WorkshopCategories;
