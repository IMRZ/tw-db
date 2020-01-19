import { CollectionCache, CollectionKey } from "../../../common";
import { MpBudgetSizes } from "./MpBudgetSizes";
export declare namespace MpBudgets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _budgetSizeKey: string;
        readonly land: boolean;
        readonly siegeDefender: boolean;
        readonly budget: number;
        constructor(collectionCache: CollectionCache, values: any);
        get budgetSizeKey(): MpBudgetSizes.Entry | undefined;
    }
}
export default MpBudgets;
