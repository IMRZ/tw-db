
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosCharacters } from "./StartPosCharacters";
import { CharacterTraitLevels } from "./CharacterTraitLevels";

export namespace StartPosCharacterTraits {
  export const KEY = new CollectionKey("start_pos_character_traits");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _characterId: number;
    readonly _traitLevel: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._characterId = values["character_id"];
      this._traitLevel = values["trait_level"];
    }
    
    get characterId(): StartPosCharacters.Entry | undefined {
      const collection = <StartPosCharacters.Entry[]>this.collectionCache.getCollection(StartPosCharacters.KEY, StartPosCharacters.Entry);
      return collection.find(entry => entry.id === this._characterId);
    }
    
    get traitLevel(): CharacterTraitLevels.Entry | undefined {
      const collection = <CharacterTraitLevels.Entry[]>this.collectionCache.getCollection(CharacterTraitLevels.KEY, CharacterTraitLevels.Entry);
      return collection.find(entry => entry.key === this._traitLevel);
    }
  }
}

export default StartPosCharacterTraits;
