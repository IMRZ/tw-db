
import { CollectionCache, CollectionKey } from "../../../common";
import { EventFeedEvents } from "./EventFeedEvents";

export namespace EventFeedSummaryEvents {
  export const KEY = new CollectionKey("event_feed_summary_events");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _event: string;
    readonly title: string;
    readonly icon: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._event = values["event"];
      this.title = values["title"];
      this.icon = values["icon"];
    }
    
    get event(): EventFeedEvents.Entry | undefined {
      const collection = <EventFeedEvents.Entry[]>this.collectionCache.getCollection(EventFeedEvents.KEY, EventFeedEvents.Entry);
      return collection.find(entry => entry.event === this._event);
    }
  }
}

export default EventFeedSummaryEvents;
