import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesIncomeAllocationPolicies } from "./CaiPersonalitiesIncomeAllocationPolicies";
import { CaiStrategicContextTypes } from "./CaiStrategicContextTypes";
import { CaiFactionStatuses } from "./CaiFactionStatuses";
import { CaiPersonalitiesIncomeAllocations } from "./CaiPersonalitiesIncomeAllocations";
export declare namespace CaiPersonalitiesIncomeAllocationPolicyFactionStatusForContextJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _incomeAllocationPolicy: string;
        readonly _strategicContext: string;
        readonly _factionStatus: string;
        readonly _incomeAllocation: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly incomeAllocationPolicy: CaiPersonalitiesIncomeAllocationPolicies.Entry | undefined;
        readonly strategicContext: CaiStrategicContextTypes.Entry | undefined;
        readonly factionStatus: CaiFactionStatuses.Entry | undefined;
        readonly incomeAllocation: CaiPersonalitiesIncomeAllocations.Entry | undefined;
    }
}
export default CaiPersonalitiesIncomeAllocationPolicyFactionStatusForContextJunctions;
