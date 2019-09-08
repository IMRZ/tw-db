import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CdirEventsIncidentOptions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly optionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CdirEventsIncidentOptions;
