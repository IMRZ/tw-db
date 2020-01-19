
import { CollectionCache, CollectionKey } from "../../../common";


export namespace EventFeedCategories {
  export const KEY = new CollectionKey("event_feed_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly category: string;
    readonly categoryTitle: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.category = values["category"];
      this.categoryTitle = values["category_title"];
    }
    
  }
}

export default EventFeedCategories;
