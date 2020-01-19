
import { CollectionCache, CollectionKey } from "../../../common";
import { EventFeedGroups } from "./EventFeedGroups";

export namespace EventFeedGroupMembers {
  export const KEY = new CollectionKey("event_feed_group_members");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _group: string;
    readonly member: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._group = values["group"];
      this.member = values["member"];
    }
    
    get group(): EventFeedGroups.Entry | undefined {
      const collection = <EventFeedGroups.Entry[]>this.collectionCache.getCollection(EventFeedGroups.KEY, EventFeedGroups.Entry);
      return collection.find(entry => entry.group === this._group);
    }
  }
}

export default EventFeedGroupMembers;
