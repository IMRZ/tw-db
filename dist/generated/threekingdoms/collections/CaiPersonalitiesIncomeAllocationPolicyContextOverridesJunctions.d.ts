import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesIncomeAllocationPolicies } from "./CaiPersonalitiesIncomeAllocationPolicies";
import { CaiContextsForContextTypes } from "./CaiContextsForContextTypes";
export declare namespace CaiPersonalitiesIncomeAllocationPolicyContextOverridesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _incomeAllocationPolicy: string;
        readonly priority: number;
        readonly _context: string;
        constructor(collectionCache: CollectionCache, values: any);
        get incomeAllocationPolicy(): CaiPersonalitiesIncomeAllocationPolicies.Entry | undefined;
        get context(): CaiContextsForContextTypes.Entry | undefined;
    }
}
export default CaiPersonalitiesIncomeAllocationPolicyContextOverridesJunctions;
