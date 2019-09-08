
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";

export namespace CdirFactionJunctions {
  export const KEY = new CollectionKey("cdir_faction_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _faction: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._faction = values["faction"];
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
  }
}

export default CdirFactionJunctions;
