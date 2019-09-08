
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { CaiPersonalityDiplomaticEvents } from "./CaiPersonalityDiplomaticEvents";

export namespace StartPosPastEvents {
  export const KEY = new CollectionKey("start_pos_past_events");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _source: string;
    readonly _target: string;
    readonly _event: string;
    readonly turnsAgo: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._source = values["source"];
      this._target = values["target"];
      this._event = values["event"];
      this.turnsAgo = values["turns_ago"];
    }
    
    get source(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._source);
    }
    
    get target(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._target);
    }
    
    get event(): CaiPersonalityDiplomaticEvents.Entry | undefined {
      const collection = <CaiPersonalityDiplomaticEvents.Entry[]>this.collectionCache.getCollection(CaiPersonalityDiplomaticEvents.KEY, CaiPersonalityDiplomaticEvents.Entry);
      return collection.find(entry => entry.id === this._event);
    }
  }
}

export default StartPosPastEvents;
