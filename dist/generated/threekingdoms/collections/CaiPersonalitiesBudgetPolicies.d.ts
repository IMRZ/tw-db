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
        get defaultBudgetAllocationKey(): CaiPersonalitiesBudgetAllocations.Entry | undefined;
        get shortDescription(): DiplomacyStrings.Entry | undefined;
        get longDescription(): DiplomacyStrings.Entry | undefined;
    }
}
export default CaiPersonalitiesBudgetPolicies;
