
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { Factions } from "./Factions";

export namespace UnitsCustomBattlePermissions {
  export const KEY = new CollectionKey("units_custom_battle_permissions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _unit: string;
    readonly _faction: string;
    readonly generalUnit: boolean;
    readonly siegeUnitAttacker: boolean;
    readonly siegeUnitDefender: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._unit = values["unit"];
      this._faction = values["faction"];
      this.generalUnit = !!values["general_unit"];
      this.siegeUnitAttacker = !!values["siege_unit_attacker"];
      this.siegeUnitDefender = !!values["siege_unit_defender"];
    }
    
    get unit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unit);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
  }
}

export default UnitsCustomBattlePermissions;
