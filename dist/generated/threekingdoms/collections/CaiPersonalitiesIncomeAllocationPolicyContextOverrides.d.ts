import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesIncomeAllocationPolicies } from "./CaiPersonalitiesIncomeAllocationPolicies";
import { CaiPersonalitiesIncomeAllocations } from "./CaiPersonalitiesIncomeAllocations";
export declare namespace CaiPersonalitiesIncomeAllocationPolicyContextOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _incomeAllocationPolicy: string;
        readonly priority: number;
        readonly _incomeAllocation: string;
        constructor(collectionCache: CollectionCache, values: any);
        get incomeAllocationPolicy(): CaiPersonalitiesIncomeAllocationPolicies.Entry | undefined;
        get incomeAllocation(): CaiPersonalitiesIncomeAllocations.Entry | undefined;
    }
}
export default CaiPersonalitiesIncomeAllocationPolicyContextOverrides;
