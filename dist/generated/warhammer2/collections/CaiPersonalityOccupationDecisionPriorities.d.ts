import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityOccupationDecisionPolicies } from "./CaiPersonalityOccupationDecisionPolicies";
export declare namespace CaiPersonalityOccupationDecisionPriorities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _policyId: string;
        readonly option: string;
        readonly lastStandPriority: number;
        readonly totalWarPriority: number;
        readonly warPriority: number;
        readonly tensionPriority: number;
        readonly peacePriority: number;
        constructor(collectionCache: CollectionCache, values: any);
        get policyId(): CaiPersonalityOccupationDecisionPolicies.Entry | undefined;
    }
}
export default CaiPersonalityOccupationDecisionPriorities;
