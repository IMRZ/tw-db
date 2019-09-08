
import { CollectionCache, CollectionKey } from "../../../common";
import { TriggerEvents } from "./TriggerEvents";

export namespace TraitTriggers {
  export const KEY = new CollectionKey("trait_triggers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly trigger: string;
    readonly _event: string;
    readonly conditions: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.trigger = values["trigger"];
      this._event = values["event"];
      this.conditions = values["conditions"];
    }
    
    get event(): TriggerEvents.Entry | undefined {
      const collection = <TriggerEvents.Entry[]>this.collectionCache.getCollection(TriggerEvents.KEY, TriggerEvents.Entry);
      return collection.find(entry => entry.event === this._event);
    }
  }
}

export default TraitTriggers;
