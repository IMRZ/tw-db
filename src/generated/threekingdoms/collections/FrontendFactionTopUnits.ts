
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { MainUnits } from "./MainUnits";

export namespace FrontendFactionTopUnits {
  export const KEY = new CollectionKey("frontend_faction_top_units");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _faction: string;
    readonly _unit: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._faction = values["faction"];
      this._unit = values["unit"];
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get unit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unit);
    }
  }
}

export default FrontendFactionTopUnits;
