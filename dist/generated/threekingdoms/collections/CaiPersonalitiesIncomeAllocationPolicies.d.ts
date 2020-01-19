import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesIncomeAllocations } from "./CaiPersonalitiesIncomeAllocations";
export declare namespace CaiPersonalitiesIncomeAllocationPolicies {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _defaultIncomeAllocation: string;
        constructor(collectionCache: CollectionCache, values: any);
        get defaultIncomeAllocation(): CaiPersonalitiesIncomeAllocations.Entry | undefined;
    }
}
export default CaiPersonalitiesIncomeAllocationPolicies;
