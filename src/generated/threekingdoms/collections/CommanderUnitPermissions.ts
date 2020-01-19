
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { Factions } from "./Factions";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";

export namespace CommanderUnitPermissions {
  export const KEY = new CollectionKey("commander_unit_permissions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _unitKey: string;
    readonly _factionKey: string;
    readonly _cultureKey: string;
    readonly _subcultureKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._unitKey = values["unit_key"];
      this._factionKey = values["faction_key"];
      this._cultureKey = values["culture_key"];
      this._subcultureKey = values["subculture_key"];
    }
    
    get unitKey(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unitKey);
    }
    
    get factionKey(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionKey);
    }
    
    get cultureKey(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._cultureKey);
    }
    
    get subcultureKey(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subcultureKey);
    }
  }
}

export default CommanderUnitPermissions;
