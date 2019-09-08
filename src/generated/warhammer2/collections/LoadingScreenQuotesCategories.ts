
import { CollectionCache, CollectionKey } from "../../../common";


export namespace LoadingScreenQuotesCategories {
  export const KEY = new CollectionKey("loading_screen_quotes_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly category: string;
    readonly categoryWeighting: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.category = values["category"];
      this.categoryWeighting = values["category_weighting"];
    }
    
  }
}

export default LoadingScreenQuotesCategories;
