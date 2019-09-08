
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TriggerEvents {
  export const KEY = new CollectionKey("trigger_events");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly event: string;
    readonly fromUi: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.event = values["event"];
      this.fromUi = !!values["from_ui"];
    }
    
  }
}

export default TriggerEvents;
