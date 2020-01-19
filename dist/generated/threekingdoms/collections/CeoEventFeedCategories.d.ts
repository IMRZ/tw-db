import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CeoEventFeedCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly eventFeedCategory: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CeoEventFeedCategories;
