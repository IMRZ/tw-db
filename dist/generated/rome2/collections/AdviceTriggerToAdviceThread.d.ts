import { CollectionCache, CollectionKey } from "../../../common";
import { AdviceTriggers } from "./AdviceTriggers";
import { AdviceThreads } from "./AdviceThreads";
export declare namespace AdviceTriggerToAdviceThread {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _trigger: string;
        readonly _thread: string;
        readonly amount: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly trigger: AdviceTriggers.Entry | undefined;
        readonly thread: AdviceThreads.Entry | undefined;
    }
}
export default AdviceTriggerToAdviceThread;
