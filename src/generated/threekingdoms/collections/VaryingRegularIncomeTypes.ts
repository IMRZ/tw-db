
import { CollectionCache, CollectionKey } from "../../../common";


export namespace VaryingRegularIncomeTypes {
  export const KEY = new CollectionKey("varying_regular_income_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default VaryingRegularIncomeTypes;
