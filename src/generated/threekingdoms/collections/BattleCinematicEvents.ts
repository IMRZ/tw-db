
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleCinematicEventCategories } from "./BattleCinematicEventCategories";

export namespace BattleCinematicEvents {
  export const KEY = new CollectionKey("battle_cinematic_events");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly filename: string;
    readonly priority: number;
    readonly level: string;
    readonly windowIn: number;
    readonly windowOut: number;
    readonly repeatWaitMs: number;
    readonly _eventCategory: string;
    readonly timeAfterEvent: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.filename = values["filename"];
      this.priority = values["priority"];
      this.level = values["level"];
      this.windowIn = values["window_in"];
      this.windowOut = values["window_out"];
      this.repeatWaitMs = values["repeat_wait_ms"];
      this._eventCategory = values["event_category"];
      this.timeAfterEvent = values["time_after_event"];
    }
    
    get eventCategory(): BattleCinematicEventCategories.Entry | undefined {
      const collection = <BattleCinematicEventCategories.Entry[]>this.collectionCache.getCollection(BattleCinematicEventCategories.KEY, BattleCinematicEventCategories.Entry);
      return collection.find(entry => entry.key === this._eventCategory);
    }
  }
}

export default BattleCinematicEvents;
