
import { CollectionCache, CollectionKey } from "../../../common";


export namespace RegularIncomeTypes {
  export const KEY = new CollectionKey("regular_income_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default RegularIncomeTypes;
