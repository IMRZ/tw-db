
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosFactions } from "./StartPosFactions";
import { CaiPersonalityDiplomaticEvents } from "./CaiPersonalityDiplomaticEvents";

export namespace StartPosPastEvents {
  export const KEY = new CollectionKey("start_pos_past_events");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _source: number;
    readonly _target: number;
    readonly _event: string;
    readonly turnsAgo: number;
    readonly unique: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._source = values["source"];
      this._target = values["target"];
      this._event = values["event"];
      this.turnsAgo = values["turns_ago"];
      this.unique = !!values["unique"];
    }
    
    get source(): StartPosFactions.Entry | undefined {
      const collection = <StartPosFactions.Entry[]>this.collectionCache.getCollection(StartPosFactions.KEY, StartPosFactions.Entry);
      return collection.find(entry => entry.id === this._source);
    }
    
    get target(): StartPosFactions.Entry | undefined {
      const collection = <StartPosFactions.Entry[]>this.collectionCache.getCollection(StartPosFactions.KEY, StartPosFactions.Entry);
      return collection.find(entry => entry.id === this._target);
    }
    
    get event(): CaiPersonalityDiplomaticEvents.Entry | undefined {
      const collection = <CaiPersonalityDiplomaticEvents.Entry[]>this.collectionCache.getCollection(CaiPersonalityDiplomaticEvents.KEY, CaiPersonalityDiplomaticEvents.Entry);
      return collection.find(entry => entry.id === this._event);
    }
  }
}

export default StartPosPastEvents;
