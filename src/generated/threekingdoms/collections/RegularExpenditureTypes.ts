
import { CollectionCache, CollectionKey } from "../../../common";


export namespace RegularExpenditureTypes {
  export const KEY = new CollectionKey("regular_expenditure_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default RegularExpenditureTypes;
