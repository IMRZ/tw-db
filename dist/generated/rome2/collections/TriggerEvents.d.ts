import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace TriggerEvents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly event: string;
        readonly fromUi: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default TriggerEvents;
