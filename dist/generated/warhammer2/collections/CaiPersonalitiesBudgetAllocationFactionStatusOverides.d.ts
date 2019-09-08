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
        readonly budgetAllocationPolicy: CaiPersonalitiesBudgetPolicies.Entry | undefined;
        readonly strategicContext: CaiStrategicContextTypes.Entry | undefined;
        readonly factionStatus: CaiFactionStatuses.Entry | undefined;
        readonly budgetAllocation: CaiPersonalitiesBudgetAllocations.Entry | undefined;
    }
}
export default CaiPersonalitiesBudgetAllocationFactionStatusOverides;
