import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CdirEventsPayloads {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly payloadKey: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CdirEventsPayloads;
