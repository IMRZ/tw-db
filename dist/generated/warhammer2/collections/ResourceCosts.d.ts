import { CollectionCache, CollectionKey } from "../../../common";
import { InstantExpenditureTypes } from "./InstantExpenditureTypes";
import { InstantIncomeTypes } from "./InstantIncomeTypes";
export declare namespace ResourceCosts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly treasuryCost: number;
        readonly _expenditureType: string;
        readonly _incomeType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get expenditureType(): InstantExpenditureTypes.Entry | undefined;
        get incomeType(): InstantIncomeTypes.Entry | undefined;
    }
}
export default ResourceCosts;
