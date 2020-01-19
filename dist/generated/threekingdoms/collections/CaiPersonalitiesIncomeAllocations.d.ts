import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CaiPersonalitiesIncomeAllocations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly proportionOfNetIncomeToSpend: number;
        readonly zeroOrNegativeNetIncomeSurvivalRounds: number;
        readonly positiveNetIncomeSurvivalRounds: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CaiPersonalitiesIncomeAllocations;
