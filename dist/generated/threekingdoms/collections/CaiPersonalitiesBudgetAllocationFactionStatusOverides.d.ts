import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesBudgetPolicies } from "./CaiPersonalitiesBudgetPolicies";
import { CaiStrategicContextTypes } from "./CaiStrategicContextTypes";
import { CaiFactionStatuses } from "./CaiFactionStatuses";
import { CaiPersonalitiesBudgetAllocations } from "./CaiPersonalitiesBudgetAllocations";
export declare namespace CaiPersonalitiesBudgetAllocationFactionStatusOverides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _budgetAllocationPolicy: string;
        readonly _strategicContext: string;
        readonly _factionStatus: string;
        readonly _budgetAllocation: string;
        constructor(collectionCache: CollectionCache, values: any);
        get budgetAllocationPolicy(): CaiPersonalitiesBudgetPolicies.Entry | undefined;
        get strategicContext(): CaiStrategicContextTypes.Entry | undefined;
        get factionStatus(): CaiFactionStatuses.Entry | undefined;
        get budgetAllocation(): CaiPersonalitiesBudgetAllocations.Entry | undefined;
    }
}
export default CaiPersonalitiesBudgetAllocationFactionStatusOverides;
