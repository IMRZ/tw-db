import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityOccupationDecisionPolicies } from "./CaiPersonalityOccupationDecisionPolicies";
export declare namespace CaiPersonalityOccupationDecisionComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly _policySuitable: string;
        readonly _policyUnsuitable: string;
        readonly _policyUninhabitable: string;
        readonly _policyUncapturable: string;
        constructor(collectionCache: CollectionCache, values: any);
        get policySuitable(): CaiPersonalityOccupationDecisionPolicies.Entry | undefined;
        get policyUnsuitable(): CaiPersonalityOccupationDecisionPolicies.Entry | undefined;
        get policyUninhabitable(): CaiPersonalityOccupationDecisionPolicies.Entry | undefined;
        get policyUncapturable(): CaiPersonalityOccupationDecisionPolicies.Entry | undefined;
    }
}
export default CaiPersonalityOccupationDecisionComponents;
