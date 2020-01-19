import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace EventFeedGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly group: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default EventFeedGroups;
