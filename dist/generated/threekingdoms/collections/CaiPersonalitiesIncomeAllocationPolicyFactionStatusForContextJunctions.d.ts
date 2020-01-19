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
        get incomeAllocationPolicy(): CaiPersonalitiesIncomeAllocationPolicies.Entry | undefined;
        get strategicContext(): CaiStrategicContextTypes.Entry | undefined;
        get factionStatus(): CaiFactionStatuses.Entry | undefined;
        get incomeAllocation(): CaiPersonalitiesIncomeAllocations.Entry | undefined;
    }
}
export default CaiPersonalitiesIncomeAllocationPolicyFactionStatusForContextJunctions;
