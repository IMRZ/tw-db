
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosCharacters } from "./StartPosCharacters";
import { StartPosFactions } from "./StartPosFactions";

export namespace StartPosCharacterEmploymentHistoryEntries {
  export const KEY = new CollectionKey("start_pos_character_employment_history_entries");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _character: number;
    readonly _faction: number;
    readonly turnsBeforeStartJoined: number;
    readonly turnsBeforeStartDeparted: string;
    readonly id: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._character = values["character"];
      this._faction = values["faction"];
      this.turnsBeforeStartJoined = values["turns_before_start_joined"];
      this.turnsBeforeStartDeparted = values["turns_before_start_departed"];
      this.id = values["id"];
    }
    
    get character(): StartPosCharacters.Entry | undefined {
      const collection = <StartPosCharacters.Entry[]>this.collectionCache.getCollection(StartPosCharacters.KEY, StartPosCharacters.Entry);
      return collection.find(entry => entry.id === this._character);
    }
    
    get faction(): StartPosFactions.Entry | undefined {
      const collection = <StartPosFactions.Entry[]>this.collectionCache.getCollection(StartPosFactions.KEY, StartPosFactions.Entry);
      return collection.find(entry => entry.id === this._faction);
    }
  }
}

export default StartPosCharacterEmploymentHistoryEntries;
