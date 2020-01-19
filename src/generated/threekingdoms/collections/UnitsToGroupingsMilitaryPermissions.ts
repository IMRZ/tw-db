
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { GroupingsMilitary } from "./GroupingsMilitary";

export namespace UnitsToGroupingsMilitaryPermissions {
  export const KEY = new CollectionKey("units_to_groupings_military_permissions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _unit: string;
    readonly _militaryGroup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._unit = values["unit"];
      this._militaryGroup = values["military_group"];
    }
    
    get unit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unit);
    }
    
    get militaryGroup(): GroupingsMilitary.Entry | undefined {
      const collection = <GroupingsMilitary.Entry[]>this.collectionCache.getCollection(GroupingsMilitary.KEY, GroupingsMilitary.Entry);
      return collection.find(entry => entry.militaryGroup === this._militaryGroup);
    }
  }
}

export default UnitsToGroupingsMilitaryPermissions;
