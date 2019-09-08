
import { CollectionCache, CollectionKey } from "../../../common";
import { HistoricalCharacters } from "./HistoricalCharacters";
import { CharacterTraitLevels } from "./CharacterTraitLevels";

export namespace HistoricalCharacterTraits {
  export const KEY = new CollectionKey("historical_character_traits");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _character: string;
    readonly _trait: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._character = values["character"];
      this._trait = values["trait"];
    }
    
    get character(): HistoricalCharacters.Entry | undefined {
      const collection = <HistoricalCharacters.Entry[]>this.collectionCache.getCollection(HistoricalCharacters.KEY, HistoricalCharacters.Entry);
      return collection.find(entry => entry.key === this._character);
    }
    
    get trait(): CharacterTraitLevels.Entry | undefined {
      const collection = <CharacterTraitLevels.Entry[]>this.collectionCache.getCollection(CharacterTraitLevels.KEY, CharacterTraitLevels.Entry);
      return collection.find(entry => entry.key === this._trait);
    }
  }
}

export default HistoricalCharacterTraits;
