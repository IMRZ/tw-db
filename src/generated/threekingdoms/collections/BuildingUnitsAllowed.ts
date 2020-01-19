
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { MainUnits } from "./MainUnits";
import { Factions } from "./Factions";

export namespace BuildingUnitsAllowed {
  export const KEY = new CollectionKey("building_units_allowed");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _building: string;
    readonly _unit: string;
    readonly xp: number;
    readonly conditions: string;
    readonly key: number;
    readonly _faction: string;
    readonly enabled: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._building = values["building"];
      this._unit = values["unit"];
      this.xp = values["XP"];
      this.conditions = values["conditions"];
      this.key = values["key"];
      this._faction = values["faction"];
      this.enabled = !!values["enabled"];
    }
    
    get building(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._building);
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

export default BuildingUnitsAllowed;
