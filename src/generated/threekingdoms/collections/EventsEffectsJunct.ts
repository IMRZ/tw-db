
import { CollectionCache, CollectionKey } from "../../../common";
import { Events } from "./Events";
import { Effects } from "./Effects";

export namespace EventsEffectsJunct {
  export const KEY = new CollectionKey("events_effects_junct");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _event: string;
    readonly _effect: string;
    readonly value: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._event = values["event"];
      this._effect = values["effect"];
      this.value = values["value"];
    }
    
    get event(): Events.Entry | undefined {
      const collection = <Events.Entry[]>this.collectionCache.getCollection(Events.KEY, Events.Entry);
      return collection.find(entry => entry.key === this._event);
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
  }
}

export default EventsEffectsJunct;
