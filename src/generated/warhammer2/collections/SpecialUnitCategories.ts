
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SpecialUnitCategories {
  export const KEY = new CollectionKey("special_unit_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly category: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.category = values["category"];
    }
    
  }
}

export default SpecialUnitCategories;
