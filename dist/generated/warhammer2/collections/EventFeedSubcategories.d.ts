import { CollectionCache, CollectionKey } from "../../../common";
import { EventFeedCategories } from "./EventFeedCategories";
export declare namespace EventFeedSubcategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly subcategory: string;
        readonly _category: string;
        readonly subcategoryTitle: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly category: EventFeedCategories.Entry | undefined;
    }
}
export default EventFeedSubcategories;
