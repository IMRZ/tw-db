
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { Factions } from "./Factions";

export namespace UnitsToExclusiveFactionPermissions {
  export const KEY = new CollectionKey("units_to_exclusive_faction_permissions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly _faction: string;
    readonly allowed: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this._faction = values["faction"];
      this.allowed = !!values["allowed"];
    }
    
    get key(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._key);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
  }
}

export default UnitsToExclusiveFactionPermissions;
