import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CdirEventsOptions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly optionKey: string;
        readonly notes: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CdirEventsOptions;
