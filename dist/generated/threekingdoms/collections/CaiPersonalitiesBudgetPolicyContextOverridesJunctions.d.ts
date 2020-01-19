import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesBudgetPolicies } from "./CaiPersonalitiesBudgetPolicies";
import { CaiContextsForContextTypes } from "./CaiContextsForContextTypes";
export declare namespace CaiPersonalitiesBudgetPolicyContextOverridesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _budgetProfileKey: string;
        readonly priority: number;
        readonly _contextKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get budgetProfileKey(): CaiPersonalitiesBudgetPolicies.Entry | undefined;
        get contextKey(): CaiContextsForContextTypes.Entry | undefined;
    }
}
export default CaiPersonalitiesBudgetPolicyContextOverridesJunctions;
