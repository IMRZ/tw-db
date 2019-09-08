
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";

export namespace FactionsParents {
  export const KEY = new CollectionKey("factions_parents");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _faction: string;
    readonly _parentFaction: any;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._faction = values["faction"];
      this._parentFaction = values["parent_faction"];
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
  }
}

export default FactionsParents;
