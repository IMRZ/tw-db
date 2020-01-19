import { CollectionCache, CollectionKey } from "../../../common";
import { TriggerEvents } from "./TriggerEvents";
export declare namespace TraitTriggers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly trigger: string;
        readonly _event: string;
        readonly conditions: string;
        constructor(collectionCache: CollectionCache, values: any);
        get event(): TriggerEvents.Entry | undefined;
    }
}
export default TraitTriggers;
