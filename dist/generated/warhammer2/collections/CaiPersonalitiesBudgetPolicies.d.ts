import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesBudgetAllocations } from "./CaiPersonalitiesBudgetAllocations";
import { DiplomacyStrings } from "./DiplomacyStrings";
export declare namespace CaiPersonalitiesBudgetPolicies {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _defaultBudgetAllocationKey: string;
        readonly _shortDescription: string;
        readonly _longDescription: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly defaultBudgetAllocationKey: CaiPersonalitiesBudgetAllocations.Entry | undefined;
        readonly shortDescription: DiplomacyStrings.Entry | undefined;
        readonly longDescription: DiplomacyStrings.Entry | undefined;
    }
}
export default CaiPersonalitiesBudgetPolicies;
