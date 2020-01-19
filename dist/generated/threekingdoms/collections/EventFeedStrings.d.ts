import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace EventFeedStrings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly text: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default EventFeedStrings;
