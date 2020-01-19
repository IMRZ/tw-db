import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesBudgetPolicies } from "./CaiPersonalitiesBudgetPolicies";
import { CaiStrategicContextTypes } from "./CaiStrategicContextTypes";
import { CaiPersonalitiesBudgetAllocations } from "./CaiPersonalitiesBudgetAllocations";
export declare namespace CaiPersonalitiesBudgetAllocationPolicyJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _budgetPolicyKey: string;
        readonly _budgetContextKey: string;
        readonly _budgetAllocationKey: string;
        readonly priority: number;
        constructor(collectionCache: CollectionCache, values: any);
        get budgetPolicyKey(): CaiPersonalitiesBudgetPolicies.Entry | undefined;
        get budgetContextKey(): CaiStrategicContextTypes.Entry | undefined;
        get budgetAllocationKey(): CaiPersonalitiesBudgetAllocations.Entry | undefined;
    }
}
export default CaiPersonalitiesBudgetAllocationPolicyJunctions;
