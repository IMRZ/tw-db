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
        constructor(collectionCache: CollectionCache, values: any);
        readonly budgetPolicyKey: CaiPersonalitiesBudgetPolicies.Entry | undefined;
        readonly budgetContextKey: CaiStrategicContextTypes.Entry | undefined;
        readonly budgetAllocationKey: CaiPersonalitiesBudgetAllocations.Entry | undefined;
    }
}
export default CaiPersonalitiesBudgetAllocationPolicyJunctions;
