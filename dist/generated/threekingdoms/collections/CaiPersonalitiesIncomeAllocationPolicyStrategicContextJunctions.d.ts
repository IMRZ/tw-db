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
        get incomeAllocationPolicyKey(): CaiPersonalitiesIncomeAllocationPolicies.Entry | undefined;
        get strategicContextKey(): CaiStrategicContextTypes.Entry | undefined;
        get incomeAllocation(): CaiPersonalitiesIncomeAllocations.Entry | undefined;
    }
}
export default CaiPersonalitiesIncomeAllocationPolicyStrategicContextJunctions;
