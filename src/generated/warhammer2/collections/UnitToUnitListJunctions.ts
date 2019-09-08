
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitLists } from "./UnitLists";
import { MainUnits } from "./MainUnits";

export namespace UnitToUnitListJunctions {
  export const KEY = new CollectionKey("unit_to_unit_list_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _unitList: string;
    readonly _unit: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._unitList = values["unit_list"];
      this._unit = values["unit"];
    }
    
    get unitList(): UnitLists.Entry | undefined {
      const collection = <UnitLists.Entry[]>this.collectionCache.getCollection(UnitLists.KEY, UnitLists.Entry);
      return collection.find(entry => entry.key === this._unitList);
    }
    
    get unit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unit);
    }
  }
}

export default UnitToUnitListJunctions;
