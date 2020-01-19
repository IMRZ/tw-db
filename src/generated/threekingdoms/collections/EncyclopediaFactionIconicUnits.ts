
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { Factions } from "./Factions";

export namespace EncyclopediaFactionIconicUnits {
  export const KEY = new CollectionKey("encyclopedia_faction_iconic_units");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _mainUnitKey: string;
    readonly _factionKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._mainUnitKey = values["main_unit_key"];
      this._factionKey = values["faction_key"];
    }
    
    get mainUnitKey(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._mainUnitKey);
    }
    
    get factionKey(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionKey);
    }
  }
}

export default EncyclopediaFactionIconicUnits;
