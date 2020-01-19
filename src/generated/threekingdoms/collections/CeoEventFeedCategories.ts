
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CeoEventFeedCategories {
  export const KEY = new CollectionKey("ceo_event_feed_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly eventFeedCategory: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.eventFeedCategory = values["event_feed_category"];
    }
    
  }
}

export default CeoEventFeedCategories;
