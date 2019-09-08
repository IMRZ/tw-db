
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosCharacters } from "./StartPosCharacters";
import { StartPosSettlements } from "./StartPosSettlements";

export namespace StartPosCharacterToSettlements {
  export const KEY = new CollectionKey("start_pos_character_to_settlements");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _character: number;
    readonly _settlement: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._character = values["character"];
      this._settlement = values["settlement"];
    }
    
    get character(): StartPosCharacters.Entry | undefined {
      const collection = <StartPosCharacters.Entry[]>this.collectionCache.getCollection(StartPosCharacters.KEY, StartPosCharacters.Entry);
      return collection.find(entry => entry.id === this._character);
    }
    
    get settlement(): StartPosSettlements.Entry | undefined {
      const collection = <StartPosSettlements.Entry[]>this.collectionCache.getCollection(StartPosSettlements.KEY, StartPosSettlements.Entry);
      return collection.find(entry => entry.id === this._settlement);
    }
  }
}

export default StartPosCharacterToSettlements;
