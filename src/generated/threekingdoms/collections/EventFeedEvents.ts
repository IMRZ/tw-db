
import { CollectionCache, CollectionKey } from "../../../common";
import { EventFeedSubcategories } from "./EventFeedSubcategories";

export namespace EventFeedEvents {
  export const KEY = new CollectionKey("event_feed_events");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly event: string;
    readonly _subcategory: string;
    readonly suppressInStartpos: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.event = values["event"];
      this._subcategory = values["subcategory"];
      this.suppressInStartpos = !!values["suppress_in_startpos"];
    }
    
    get subcategory(): EventFeedSubcategories.Entry | undefined {
      const collection = <EventFeedSubcategories.Entry[]>this.collectionCache.getCollection(EventFeedSubcategories.KEY, EventFeedSubcategories.Entry);
      return collection.find(entry => entry.subcategory === this._subcategory);
    }
  }
}

export default EventFeedEvents;
