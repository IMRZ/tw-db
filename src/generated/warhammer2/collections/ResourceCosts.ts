
import { CollectionCache, CollectionKey } from "../../../common";
import { InstantExpenditureTypes } from "./InstantExpenditureTypes";
import { InstantIncomeTypes } from "./InstantIncomeTypes";

export namespace ResourceCosts {
  export const KEY = new CollectionKey("resource_costs");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly treasuryCost: number;
    readonly _expenditureType: string;
    readonly _incomeType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this.treasuryCost = values["treasury_cost"];
      this._expenditureType = values["expenditure_type"];
      this._incomeType = values["income_type"];
    }
    
    get expenditureType(): InstantExpenditureTypes.Entry | undefined {
      const collection = <InstantExpenditureTypes.Entry[]>this.collectionCache.getCollection(InstantExpenditureTypes.KEY, InstantExpenditureTypes.Entry);
      return collection.find(entry => entry.id === this._expenditureType);
    }
    
    get incomeType(): InstantIncomeTypes.Entry | undefined {
      const collection = <InstantIncomeTypes.Entry[]>this.collectionCache.getCollection(InstantIncomeTypes.KEY, InstantIncomeTypes.Entry);
      return collection.find(entry => entry.id === this._incomeType);
    }
  }
}

export default ResourceCosts;
