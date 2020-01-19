
import { CollectionCache, CollectionKey } from "../../../common";
import { InstantExpenditureTypes } from "./InstantExpenditureTypes";
import { InstantIncomeTypes } from "./InstantIncomeTypes";
import { RegularExpenditureTypes } from "./RegularExpenditureTypes";
import { RegularIncomeTypes } from "./RegularIncomeTypes";

export namespace ResourceTransactions {
  export const KEY = new CollectionKey("resource_transactions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly treasuryChange: number;
    readonly _expenditureTypeWhenInstant: string;
    readonly _incomeTypeWhenInstant: string;
    readonly _expenditureTypeWhenRegular: string;
    readonly _incomeTypeWhenRegular: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.treasuryChange = values["treasury_change"];
      this._expenditureTypeWhenInstant = values["expenditure_type_when_instant"];
      this._incomeTypeWhenInstant = values["income_type_when_instant"];
      this._expenditureTypeWhenRegular = values["expenditure_type_when_regular"];
      this._incomeTypeWhenRegular = values["income_type_when_regular"];
    }
    
    get expenditureTypeWhenInstant(): InstantExpenditureTypes.Entry | undefined {
      const collection = <InstantExpenditureTypes.Entry[]>this.collectionCache.getCollection(InstantExpenditureTypes.KEY, InstantExpenditureTypes.Entry);
      return collection.find(entry => entry.key === this._expenditureTypeWhenInstant);
    }
    
    get incomeTypeWhenInstant(): InstantIncomeTypes.Entry | undefined {
      const collection = <InstantIncomeTypes.Entry[]>this.collectionCache.getCollection(InstantIncomeTypes.KEY, InstantIncomeTypes.Entry);
      return collection.find(entry => entry.key === this._incomeTypeWhenInstant);
    }
    
    get expenditureTypeWhenRegular(): RegularExpenditureTypes.Entry | undefined {
      const collection = <RegularExpenditureTypes.Entry[]>this.collectionCache.getCollection(RegularExpenditureTypes.KEY, RegularExpenditureTypes.Entry);
      return collection.find(entry => entry.key === this._expenditureTypeWhenRegular);
    }
    
    get incomeTypeWhenRegular(): RegularIncomeTypes.Entry | undefined {
      const collection = <RegularIncomeTypes.Entry[]>this.collectionCache.getCollection(RegularIncomeTypes.KEY, RegularIncomeTypes.Entry);
      return collection.find(entry => entry.key === this._incomeTypeWhenRegular);
    }
  }
}

export default ResourceTransactions;
