
import { CollectionCache, CollectionKey } from "../../../common";


export namespace MpBudgetSizes {
  export const KEY = new CollectionKey("mp_budget_sizes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default MpBudgetSizes;
