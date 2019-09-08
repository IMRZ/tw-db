
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterTraits } from "./CharacterTraits";
import { Technologies } from "./Technologies";

export namespace CharacterTraitLevels {
  export const KEY = new CollectionKey("character_trait_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreenName: string;
    readonly _trait: string;
    readonly level: number;
    readonly thresholdPoints: number;
    readonly epithetText: string;
    readonly gainText: string;
    readonly effectText: string;
    readonly colourText: string;
    readonly explanationText: string;
    readonly removalText: string;
    readonly _enabledByTech: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreenName = values["onscreen_name"];
      this._trait = values["trait"];
      this.level = values["level"];
      this.thresholdPoints = values["threshold_points"];
      this.epithetText = values["epithet_text"];
      this.gainText = values["gain_text"];
      this.effectText = values["effect_text"];
      this.colourText = values["colour_text"];
      this.explanationText = values["explanation_text"];
      this.removalText = values["removal_text"];
      this._enabledByTech = values["enabled_by_tech"];
    }
    
    get trait(): CharacterTraits.Entry | undefined {
      const collection = <CharacterTraits.Entry[]>this.collectionCache.getCollection(CharacterTraits.KEY, CharacterTraits.Entry);
      return collection.find(entry => entry._key === this._trait);
    }
    
    get enabledByTech(): Technologies.Entry | undefined {
      const collection = <Technologies.Entry[]>this.collectionCache.getCollection(Technologies.KEY, Technologies.Entry);
      return collection.find(entry => entry.key === this._enabledByTech);
    }
  }
}

export default CharacterTraitLevels;
