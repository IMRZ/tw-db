import { CollectionCache, CollectionKey } from "../../../common";
import { CeoTriggerBehaviourEnums } from "./CeoTriggerBehaviourEnums";
import { Ceos } from "./Ceos";
import { CeoGroups } from "./CeoGroups";
export declare namespace CeoTriggerTargets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _triggerBehaviour: string;
        readonly _targetIndividualCeo: string;
        readonly _targetGroup: string;
        readonly numToTarget: number;
        readonly minPointsApplied: number;
        readonly maxPointsApplied: number;
        constructor(collectionCache: CollectionCache, values: any);
        get triggerBehaviour(): CeoTriggerBehaviourEnums.Entry | undefined;
        get targetIndividualCeo(): Ceos.Entry | undefined;
        get targetGroup(): CeoGroups.Entry | undefined;
    }
}
export default CeoTriggerTargets;
