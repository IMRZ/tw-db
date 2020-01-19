import { CollectionCache, CollectionKey } from "../../../common";
import { InstantExpenditureTypes } from "./InstantExpenditureTypes";
import { InstantIncomeTypes } from "./InstantIncomeTypes";
import { RegularExpenditureTypes } from "./RegularExpenditureTypes";
import { RegularIncomeTypes } from "./RegularIncomeTypes";
export declare namespace ResourceTransactions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly treasuryChange: number;
        readonly _expenditureTypeWhenInstant: string;
        readonly _incomeTypeWhenInstant: string;
        readonly _expenditureTypeWhenRegular: string;
        readonly _incomeTypeWhenRegular: string;
        constructor(collectionCache: CollectionCache, values: any);
        get expenditureTypeWhenInstant(): InstantExpenditureTypes.Entry | undefined;
        get incomeTypeWhenInstant(): InstantIncomeTypes.Entry | undefined;
        get expenditureTypeWhenRegular(): RegularExpenditureTypes.Entry | undefined;
        get incomeTypeWhenRegular(): RegularIncomeTypes.Entry | undefined;
    }
}
export default ResourceTransactions;
