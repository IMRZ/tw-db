
import { CollectionCache, CollectionKey } from "../../../common";
import { EventFeedCategories } from "./EventFeedCategories";

export namespace EventFeedSubcategories {
  export const KEY = new CollectionKey("event_feed_subcategories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly subcategory: string;
    readonly _category: string;
    readonly subcategoryTitle: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.subcategory = values["subcategory"];
      this._category = values["category"];
      this.subcategoryTitle = values["subcategory_title"];
    }
    
    get category(): EventFeedCategories.Entry | undefined {
      const collection = <EventFeedCategories.Entry[]>this.collectionCache.getCollection(EventFeedCategories.KEY, EventFeedCategories.Entry);
      return collection.find(entry => entry.category === this._category);
    }
  }
}

export default EventFeedSubcategories;
