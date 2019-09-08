import { CollectionCache, CollectionKey } from "../../../common";
import { TriggerEvents } from "./TriggerEvents";
export declare namespace AdviceTriggers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _testWhen: string;
        readonly conditionScript: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly testWhen: TriggerEvents.Entry | undefined;
    }
}
export default AdviceTriggers;
