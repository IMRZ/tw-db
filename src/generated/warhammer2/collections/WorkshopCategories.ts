
import { CollectionCache, CollectionKey } from "../../../common";


export namespace WorkshopCategories {
  export const KEY = new CollectionKey("workshop_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly category: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.category = values["category"];
    }
    
  }
}

export default WorkshopCategories;
