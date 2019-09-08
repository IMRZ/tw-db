
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterTraitLevels } from "./CharacterTraitLevels";
import { CulturesSubcultures } from "./CulturesSubcultures";

export namespace TraitLevelStringSubcultureOverrides {
  export const KEY = new CollectionKey("trait_level_string_subculture_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _traitLevel: string;
    readonly _subculture: string;
    readonly onscreenNameOverride: string;
    readonly colourTextOverride: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._traitLevel = values["trait_level"];
      this._subculture = values["subculture"];
      this.onscreenNameOverride = values["onscreen_name_override"];
      this.colourTextOverride = values["colour_text_override"];
    }
    
    get traitLevel(): CharacterTraitLevels.Entry | undefined {
      const collection = <CharacterTraitLevels.Entry[]>this.collectionCache.getCollection(CharacterTraitLevels.KEY, CharacterTraitLevels.Entry);
      return collection.find(entry => entry.key === this._traitLevel);
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
  }
}

export default TraitLevelStringSubcultureOverrides;
