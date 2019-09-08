
import { CollectionCache, CollectionKey } from "../../../common";
import { Technologies } from "./Technologies";
import { Factions } from "./Factions";

export namespace TechnologyFactionJunctions {
  export const KEY = new CollectionKey("technology_faction_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _technologyKey: string;
    readonly _factionKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._technologyKey = values["technology_key"];
      this._factionKey = values["faction_key"];
    }
    
    get technologyKey(): Technologies.Entry | undefined {
      const collection = <Technologies.Entry[]>this.collectionCache.getCollection(Technologies.KEY, Technologies.Entry);
      return collection.find(entry => entry.key === this._technologyKey);
    }
    
    get factionKey(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionKey);
    }
  }
}

export default TechnologyFactionJunctions;
