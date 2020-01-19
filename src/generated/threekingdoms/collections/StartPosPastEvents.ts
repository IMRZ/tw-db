
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosFactions } from "./StartPosFactions";
import { CaiDiplomacyEvents } from "./CaiDiplomacyEvents";

export namespace StartPosPastEvents {
  export const KEY = new CollectionKey("start_pos_past_events");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _source: number;
    readonly _target: number;
    readonly _eventSource: string;
    readonly turnsAgo: number;
    readonly unique: boolean;
    readonly _eventTarget: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._source = values["source"];
      this._target = values["target"];
      this._eventSource = values["event_source"];
      this.turnsAgo = values["turns_ago"];
      this.unique = !!values["unique"];
      this._eventTarget = values["event_target"];
    }
    
    get source(): StartPosFactions.Entry | undefined {
      const collection = <StartPosFactions.Entry[]>this.collectionCache.getCollection(StartPosFactions.KEY, StartPosFactions.Entry);
      return collection.find(entry => entry.id === this._source);
    }
    
    get target(): StartPosFactions.Entry | undefined {
      const collection = <StartPosFactions.Entry[]>this.collectionCache.getCollection(StartPosFactions.KEY, StartPosFactions.Entry);
      return collection.find(entry => entry.id === this._target);
    }
    
    get eventSource(): CaiDiplomacyEvents.Entry | undefined {
      const collection = <CaiDiplomacyEvents.Entry[]>this.collectionCache.getCollection(CaiDiplomacyEvents.KEY, CaiDiplomacyEvents.Entry);
      return collection.find(entry => entry.id === this._eventSource);
    }
    
    get eventTarget(): CaiDiplomacyEvents.Entry | undefined {
      const collection = <CaiDiplomacyEvents.Entry[]>this.collectionCache.getCollection(CaiDiplomacyEvents.KEY, CaiDiplomacyEvents.Entry);
      return collection.find(entry => entry.id === this._eventTarget);
    }
  }
}

export default StartPosPastEvents;
