
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { MainUnits } from "./MainUnits";

export namespace FactionRebellionUnitsJunctions {
  export const KEY = new CollectionKey("faction_rebellion_units_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _factionKey: string;
    readonly _unitKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._factionKey = values["faction_key"];
      this._unitKey = values["unit_key"];
    }
    
    get factionKey(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionKey);
    }
    
    get unitKey(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unitKey);
    }
  }
}

export default FactionRebellionUnitsJunctions;
