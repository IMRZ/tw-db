
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Events {
  export const KEY = new CollectionKey("events");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly dynamic: boolean;
    readonly onscreenName: string;
    readonly eventText: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.dynamic = !!values["dynamic"];
      this.onscreenName = values["onscreen_name"];
      this.eventText = values["event_text"];
    }
    
  }
}

export default Events;
