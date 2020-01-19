
import { CollectionCache, CollectionKey } from "../../../common";
import { Technologies } from "./Technologies";
import { MainUnits } from "./MainUnits";

export namespace TechnologyUnitUpgrades {
  export const KEY = new CollectionKey("technology_unit_upgrades");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _technology: string;
    readonly _unit: string;
    readonly _targetUnit: string;
    readonly cost: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._technology = values["technology"];
      this._unit = values["unit"];
      this._targetUnit = values["target_unit"];
      this.cost = values["cost"];
    }
    
    get technology(): Technologies.Entry | undefined {
      const collection = <Technologies.Entry[]>this.collectionCache.getCollection(Technologies.KEY, Technologies.Entry);
      return collection.find(entry => entry.key === this._technology);
    }
    
    get unit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unit);
    }
    
    get targetUnit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._targetUnit);
    }
  }
}

export default TechnologyUnitUpgrades;
