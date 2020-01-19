
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { MercenaryPools } from "./MercenaryPools";

export namespace FactionToMercenarySetJunctions {
  export const KEY = new CollectionKey("faction_to_mercenary_set_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _faction: string;
    readonly _mercenarySet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._faction = values["faction"];
      this._mercenarySet = values["mercenary_set"];
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get mercenarySet(): MercenaryPools.Entry | undefined {
      const collection = <MercenaryPools.Entry[]>this.collectionCache.getCollection(MercenaryPools.KEY, MercenaryPools.Entry);
      return collection.find(entry => entry.key === this._mercenarySet);
    }
  }
}

export default FactionToMercenarySetJunctions;
