
import { CollectionCache, CollectionKey } from "../../../common";
import { PortraitTypes } from "./PortraitTypes";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Factions } from "./Factions";

export namespace CultureSubcultureCharacterPortraits {
  export const KEY = new CollectionKey("culture_subculture_character_portraits");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _portraitType: string;
    readonly _culture: string;
    readonly _subculture: string;
    readonly _faction: string;
    readonly path: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._portraitType = values["portrait_type"];
      this._culture = values["culture"];
      this._subculture = values["subculture"];
      this._faction = values["faction"];
      this.path = values["path"];
    }
    
    get portraitType(): PortraitTypes.Entry | undefined {
      const collection = <PortraitTypes.Entry[]>this.collectionCache.getCollection(PortraitTypes.KEY, PortraitTypes.Entry);
      return collection.find(entry => entry.key === this._portraitType);
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
  }
}

export default CultureSubcultureCharacterPortraits;
