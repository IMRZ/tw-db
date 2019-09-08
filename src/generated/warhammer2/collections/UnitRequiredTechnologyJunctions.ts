
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { Technologies } from "./Technologies";

export namespace UnitRequiredTechnologyJunctions {
  export const KEY = new CollectionKey("unit_required_technology_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _unitKey: string;
    readonly _technologyKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._unitKey = values["unit_key"];
      this._technologyKey = values["technology_key"];
    }
    
    get unitKey(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unitKey);
    }
    
    get technologyKey(): Technologies.Entry | undefined {
      const collection = <Technologies.Entry[]>this.collectionCache.getCollection(Technologies.KEY, Technologies.Entry);
      return collection.find(entry => entry.key === this._technologyKey);
    }
  }
}

export default UnitRequiredTechnologyJunctions;
