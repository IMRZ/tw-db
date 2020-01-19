import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CdirEventsMissionStatuses {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly statusKey: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CdirEventsMissionStatuses;
