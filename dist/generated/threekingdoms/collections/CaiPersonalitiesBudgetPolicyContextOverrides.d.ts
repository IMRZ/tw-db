import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesBudgetPolicies } from "./CaiPersonalitiesBudgetPolicies";
import { CaiPersonalitiesBudgetAllocations } from "./CaiPersonalitiesBudgetAllocations";
export declare namespace CaiPersonalitiesBudgetPolicyContextOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _budgetProfileKey: string;
        readonly priority: number;
        readonly _defaultBudgetAllocation: string;
        constructor(collectionCache: CollectionCache, values: any);
        get budgetProfileKey(): CaiPersonalitiesBudgetPolicies.Entry | undefined;
        get defaultBudgetAllocation(): CaiPersonalitiesBudgetAllocations.Entry | undefined;
    }
}
export default CaiPersonalitiesBudgetPolicyContextOverrides;
