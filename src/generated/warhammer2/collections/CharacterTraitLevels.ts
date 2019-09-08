
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterTraits } from "./CharacterTraits";

export namespace CharacterTraitLevels {
  export const KEY = new CollectionKey("character_trait_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreenName: string;
    readonly _trait: string;
    readonly level: number;
    readonly thresholdPoints: number;
    readonly colourText: string;
    readonly explanationText: string;
    readonly removalText: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreenName = values["onscreen_name"];
      this._trait = values["trait"];
      this.level = values["level"];
      this.thresholdPoints = values["threshold_points"];
      this.colourText = values["colour_text"];
      this.explanationText = values["explanation_text"];
      this.removalText = values["removal_text"];
    }
    
    get trait(): CharacterTraits.Entry | undefined {
      const collection = <CharacterTraits.Entry[]>this.collectionCache.getCollection(CharacterTraits.KEY, CharacterTraits.Entry);
      return collection.find(entry => entry._key === this._trait);
    }
  }
}

export default CharacterTraitLevels;
