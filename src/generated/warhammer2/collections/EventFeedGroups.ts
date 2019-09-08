
import { CollectionCache, CollectionKey } from "../../../common";


export namespace EventFeedGroups {
  export const KEY = new CollectionKey("event_feed_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly group: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.group = values["group"];
    }
    
  }
}

export default EventFeedGroups;
