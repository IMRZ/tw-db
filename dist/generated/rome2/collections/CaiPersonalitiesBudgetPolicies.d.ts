import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesBudgetAllocations } from "./CaiPersonalitiesBudgetAllocations";
export declare namespace CaiPersonalitiesBudgetPolicies {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _defaultBudgetAllocationKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get defaultBudgetAllocationKey(): CaiPersonalitiesBudgetAllocations.Entry | undefined;
    }
}
export default CaiPersonalitiesBudgetPolicies;
