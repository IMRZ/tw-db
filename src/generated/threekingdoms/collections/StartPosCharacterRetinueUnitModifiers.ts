
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosCharacters } from "./StartPosCharacters";

export namespace StartPosCharacterRetinueUnitModifiers {
  export const KEY = new CollectionKey("start_pos_character_retinue_unit_modifiers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _character: number;
    readonly retinueSlotIndex: number;
    readonly unitStartingHealthPercentage: number;
    readonly unitStartingExperienceLevel: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._character = values["character"];
      this.retinueSlotIndex = values["retinue_slot_index"];
      this.unitStartingHealthPercentage = values["unit_starting_health_percentage"];
      this.unitStartingExperienceLevel = values["unit_starting_experience_level"];
    }
    
    get character(): StartPosCharacters.Entry | undefined {
      const collection = <StartPosCharacters.Entry[]>this.collectionCache.getCollection(StartPosCharacters.KEY, StartPosCharacters.Entry);
      return collection.find(entry => entry.id === this._character);
    }
  }
}

export default StartPosCharacterRetinueUnitModifiers;
