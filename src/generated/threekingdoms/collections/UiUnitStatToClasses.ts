
import { CollectionCache, CollectionKey } from "../../../common";
import { UiUnitStats } from "./UiUnitStats";
import { UnitClass } from "./UnitClass";
import { UiUnitStatsFilters } from "./UiUnitStatsFilters";

export namespace UiUnitStatToClasses {
  export const KEY = new CollectionKey("ui_unit_stat_to_classes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _statKey: string;
    readonly _unitClass: string;
    readonly listOrder: number;
    readonly _filter: string;
    readonly baseValue: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._statKey = values["stat_key"];
      this._unitClass = values["unit_class"];
      this.listOrder = values["list_order"];
      this._filter = values["filter"];
      this.baseValue = values["base_value"];
    }
    
    get statKey(): UiUnitStats.Entry | undefined {
      const collection = <UiUnitStats.Entry[]>this.collectionCache.getCollection(UiUnitStats.KEY, UiUnitStats.Entry);
      return collection.find(entry => entry.key === this._statKey);
    }
    
    get unitClass(): UnitClass.Entry | undefined {
      const collection = <UnitClass.Entry[]>this.collectionCache.getCollection(UnitClass.KEY, UnitClass.Entry);
      return collection.find(entry => entry.key === this._unitClass);
    }
    
    get filter(): UiUnitStatsFilters.Entry | undefined {
      const collection = <UiUnitStatsFilters.Entry[]>this.collectionCache.getCollection(UiUnitStatsFilters.KEY, UiUnitStatsFilters.Entry);
      return collection.find(entry => entry.key === this._filter);
    }
  }
}

export default UiUnitStatToClasses;
