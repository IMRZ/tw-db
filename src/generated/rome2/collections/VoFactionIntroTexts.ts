
import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
import { Factions } from "./Factions";

export namespace VoFactionIntroTexts {
  export const KEY = new CollectionKey("vo_faction_intro_texts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _culture: string;
    readonly _faction: string;
    readonly text: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._culture = values["culture"];
      this._faction = values["faction"];
      this.text = values["text"];
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
  }
}

export default VoFactionIntroTexts;
