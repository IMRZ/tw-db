import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace EventFeedCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly category: string;
        readonly categoryTitle: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default EventFeedCategories;
