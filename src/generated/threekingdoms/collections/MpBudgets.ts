
import { CollectionCache, CollectionKey } from "../../../common";
import { MpBudgetSizes } from "./MpBudgetSizes";

export namespace MpBudgets {
  export const KEY = new CollectionKey("mp_budgets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _budgetSizeKey: string;
    readonly land: boolean;
    readonly siegeDefender: boolean;
    readonly budget: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._budgetSizeKey = values["budget_size_key"];
      this.land = !!values["land"];
      this.siegeDefender = !!values["siege_defender"];
      this.budget = values["budget"];
    }
    
    get budgetSizeKey(): MpBudgetSizes.Entry | undefined {
      const collection = <MpBudgetSizes.Entry[]>this.collectionCache.getCollection(MpBudgetSizes.KEY, MpBudgetSizes.Entry);
      return collection.find(entry => entry.key === this._budgetSizeKey);
    }
  }
}

export default MpBudgets;
