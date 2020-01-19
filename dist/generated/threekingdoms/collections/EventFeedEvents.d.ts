import { CollectionCache, CollectionKey } from "../../../common";
import { EventFeedSubcategories } from "./EventFeedSubcategories";
export declare namespace EventFeedEvents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly event: string;
        readonly _subcategory: string;
        readonly suppressInStartpos: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get subcategory(): EventFeedSubcategories.Entry | undefined;
    }
}
export default EventFeedEvents;
