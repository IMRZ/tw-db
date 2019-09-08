import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CdirEventsCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly categoryKey: string;
        readonly onScreenName: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CdirEventsCategories;
