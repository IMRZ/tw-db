
import { CollectionCache, CollectionKey } from "../../../common";
import { FactionSets } from "./FactionSets";
import { Factions } from "./Factions";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Cultures } from "./Cultures";

export namespace FactionSetItems {
  export const KEY = new CollectionKey("faction_set_items");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _set: string;
    readonly _faction: string;
    readonly _subculture: string;
    readonly _culture: string;
    readonly remove: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._set = values["set"];
      this._faction = values["faction"];
      this._subculture = values["subculture"];
      this._culture = values["culture"];
      this.remove = !!values["remove"];
    }
    
    get set(): FactionSets.Entry | undefined {
      const collection = <FactionSets.Entry[]>this.collectionCache.getCollection(FactionSets.KEY, FactionSets.Entry);
      return collection.find(entry => entry.key === this._set);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
  }
}

export default FactionSetItems;
