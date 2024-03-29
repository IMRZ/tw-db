import { CollectionCache, CollectionKey } from "../../../common";
import { TraitTriggers } from "./TraitTriggers";
import { TraitInfo } from "./TraitInfo";
export declare namespace TriggerEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _trigger: string;
        readonly _trait: string;
        readonly value: number;
        readonly chance: number;
        constructor(collectionCache: CollectionCache, values: any);
        get trigger(): TraitTriggers.Entry | undefined;
        get trait(): TraitInfo.Entry | undefined;
    }
}
export default TriggerEffects;
