
import { CollectionCache, CollectionKey } from "../../../common";
import { LandUnits } from "./LandUnits";
import { DynastyUpgrades } from "./DynastyUpgrades";

export namespace LandUnitsToDynastyUpgradesJunctions {
  export const KEY = new CollectionKey("land_units_to_dynasty_upgrades_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _unit: string;
    readonly _upgrade: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._unit = values["unit"];
      this._upgrade = values["upgrade"];
    }
    
    get unit(): LandUnits.Entry | undefined {
      const collection = <LandUnits.Entry[]>this.collectionCache.getCollection(LandUnits.KEY, LandUnits.Entry);
      return collection.find(entry => entry.key === this._unit);
    }
    
    get upgrade(): DynastyUpgrades.Entry | undefined {
      const collection = <DynastyUpgrades.Entry[]>this.collectionCache.getCollection(DynastyUpgrades.KEY, DynastyUpgrades.Entry);
      return collection.find(entry => entry.key === this._upgrade);
    }
  }
}

export default LandUnitsToDynastyUpgradesJunctions;
