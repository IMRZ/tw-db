
import { CollectionCache, CollectionKey } from "../../../common";


export namespace InstantExpenditureTypes {
  export const KEY = new CollectionKey("instant_expenditure_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default InstantExpenditureTypes;
