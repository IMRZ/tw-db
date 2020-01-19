
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosCharacters } from "./StartPosCharacters";
import { Factions } from "./Factions";
import { PastExperienceReasons } from "./PastExperienceReasons";

export namespace StartPosHistoricalCharactersPastExperiences {
  export const KEY = new CollectionKey("start_pos_historical_characters_past_experiences");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _character: number;
    readonly _targetFaction: string;
    readonly _memory: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._character = values["character"];
      this._targetFaction = values["target_faction"];
      this._memory = values["memory"];
    }
    
    get character(): StartPosCharacters.Entry | undefined {
      const collection = <StartPosCharacters.Entry[]>this.collectionCache.getCollection(StartPosCharacters.KEY, StartPosCharacters.Entry);
      return collection.find(entry => entry.id === this._character);
    }
    
    get targetFaction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._targetFaction);
    }
    
    get memory(): PastExperienceReasons.Entry | undefined {
      const collection = <PastExperienceReasons.Entry[]>this.collectionCache.getCollection(PastExperienceReasons.KEY, PastExperienceReasons.Entry);
      return collection.find(entry => entry.key === this._memory);
    }
  }
}

export default StartPosHistoricalCharactersPastExperiences;
