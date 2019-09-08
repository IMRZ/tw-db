
import { CollectionCache, CollectionKey } from "../../../common";
import { EventFeedEvents } from "./EventFeedEvents";
import { EventFeedGroups } from "./EventFeedGroups";
import { EventFeedStrings } from "./EventFeedStrings";

export namespace EventFeedTargetedEvents {
  export const KEY = new CollectionKey("event_feed_targeted_events");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _event: string;
    readonly _target: string;
    readonly persistent: boolean;
    readonly instantOpen: boolean;
    readonly title: string;
    readonly _primaryDetail: string;
    readonly icon: string;
    readonly _located: string;
    readonly _targetCriteria: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._event = values["event"];
      this._target = values["target"];
      this.persistent = !!values["persistent"];
      this.instantOpen = !!values["instant_open"];
      this.title = values["title"];
      this._primaryDetail = values["primary_detail"];
      this.icon = values["icon"];
      this._located = values["located"];
      this._targetCriteria = values["target_criteria"];
    }
    
    get event(): EventFeedEvents.Entry | undefined {
      const collection = <EventFeedEvents.Entry[]>this.collectionCache.getCollection(EventFeedEvents.KEY, EventFeedEvents.Entry);
      return collection.find(entry => entry.event === this._event);
    }
    
    get target(): EventFeedGroups.Entry | undefined {
      const collection = <EventFeedGroups.Entry[]>this.collectionCache.getCollection(EventFeedGroups.KEY, EventFeedGroups.Entry);
      return collection.find(entry => entry.group === this._target);
    }
    
    get primaryDetail(): EventFeedStrings.Entry | undefined {
      const collection = <EventFeedStrings.Entry[]>this.collectionCache.getCollection(EventFeedStrings.KEY, EventFeedStrings.Entry);
      return collection.find(entry => entry.key === this._primaryDetail);
    }
    
    get located(): EventFeedGroups.Entry | undefined {
      const collection = <EventFeedGroups.Entry[]>this.collectionCache.getCollection(EventFeedGroups.KEY, EventFeedGroups.Entry);
      return collection.find(entry => entry.group === this._located);
    }
    
    get targetCriteria(): EventFeedGroups.Entry | undefined {
      const collection = <EventFeedGroups.Entry[]>this.collectionCache.getCollection(EventFeedGroups.KEY, EventFeedGroups.Entry);
      return collection.find(entry => entry.group === this._targetCriteria);
    }
  }
}

export default EventFeedTargetedEvents;
