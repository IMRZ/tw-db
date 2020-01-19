import { CollectionCache, CollectionKey } from "../../../common";
import { CeoTriggers } from "./CeoTriggers";
import { CeoTriggerTargets } from "./CeoTriggerTargets";
export declare namespace CeoTriggerToTriggerTargets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _trigger: string;
        readonly _triggerTarget: string;
        readonly processOrderPriority: number;
        readonly autoId: number;
        constructor(collectionCache: CollectionCache, values: any);
        get trigger(): CeoTriggers.Entry | undefined;
        get triggerTarget(): CeoTriggerTargets.Entry | undefined;
    }
}
export default CeoTriggerToTriggerTargets;
