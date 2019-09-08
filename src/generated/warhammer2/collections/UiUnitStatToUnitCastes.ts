
import { CollectionCache, CollectionKey } from "../../../common";
import { UiUnitStats } from "./UiUnitStats";
import { UnitCastes } from "./UnitCastes";

export namespace UiUnitStatToUnitCastes {
  export const KEY = new CollectionKey("ui_unit_stat_to_unit_castes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _stat: string;
    readonly _unitCaste: string;
    readonly maxValueOverride: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._stat = values["stat"];
      this._unitCaste = values["unit_caste"];
      this.maxValueOverride = values["max_value_override"];
    }
    
    get stat(): UiUnitStats.Entry | undefined {
      const collection = <UiUnitStats.Entry[]>this.collectionCache.getCollection(UiUnitStats.KEY, UiUnitStats.Entry);
      return collection.find(entry => entry.key === this._stat);
    }
    
    get unitCaste(): UnitCastes.Entry | undefined {
      const collection = <UnitCastes.Entry[]>this.collectionCache.getCollection(UnitCastes.KEY, UnitCastes.Entry);
      return collection.find(entry => entry.caste === this._unitCaste);
    }
  }
}

export default UiUnitStatToUnitCastes;
