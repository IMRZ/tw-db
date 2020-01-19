
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TExcTableExportCategories {
  export const KEY = new CollectionKey("TExc_TableExportCategories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly category: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.category = values["category"];
    }
    
  }
}

export default TExcTableExportCategories;
