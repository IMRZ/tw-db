import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesIncomeAllocationPolicies } from "./CaiPersonalitiesIncomeAllocationPolicies";
import { CaiStrategicContextTypes } from "./CaiStrategicContextTypes";
import { CaiPersonalitiesIncomeAllocations } from "./CaiPersonalitiesIncomeAllocations";
export declare namespace CaiPersonalitiesIncomeAllocationPolicyStrategicContextJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _incomeAllocationPolicyKey: string;
        readonly _strategicContextKey: string;
        readonly proportionOfNetIncomeToSpend: number;
        readonly zeroOrNegativeNetIncomeSurvivalRounds: number;
        readonly positiveNetIncomeSurvivalRounds: number;
        readonly _incomeAllocation: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly incomeAllocationPolicyKey: CaiPersonalitiesIncomeAllocationPolicies.Entry | undefined;
        readonly strategicContextKey: CaiStrategicContextTypes.Entry | undefined;
        readonly incomeAllocation: CaiPersonalitiesIncomeAllocations.Entry | undefined;
    }
}
export default CaiPersonalitiesIncomeAllocationPolicyStrategicContextJunctions;
