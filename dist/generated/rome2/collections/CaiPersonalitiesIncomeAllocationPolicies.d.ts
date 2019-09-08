import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CaiPersonalitiesIncomeAllocationPolicies {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly defaultProportionOfNetIncomeToSpend: number;
        readonly defaultZeroOrNegativeNetIncomeSurvivalRounds: number;
        readonly defaultPositiveNetIncomeSurvivalRounds: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CaiPersonalitiesIncomeAllocationPolicies;
