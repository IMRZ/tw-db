
import { CollectionCache, CollectionKey } from "../../../common";


export namespace WarscapeCategories {
  export const KEY = new CollectionKey("warscape_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default WarscapeCategories;
