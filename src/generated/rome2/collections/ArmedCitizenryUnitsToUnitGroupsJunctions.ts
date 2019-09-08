
import { CollectionCache, CollectionKey } from "../../../common";
import { ArmedCitizenryUnitGroups } from "./ArmedCitizenryUnitGroups";
import { MainUnits } from "./MainUnits";

export namespace ArmedCitizenryUnitsToUnitGroupsJunctions {
  export const KEY = new CollectionKey("armed_citizenry_units_to_unit_groups_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _unitGroup: string;
    readonly _unit: string;
    readonly priority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._unitGroup = values["unit_group"];
      this._unit = values["unit"];
      this.priority = values["priority"];
    }
    
    get unitGroup(): ArmedCitizenryUnitGroups.Entry | undefined {
      const collection = <ArmedCitizenryUnitGroups.Entry[]>this.collectionCache.getCollection(ArmedCitizenryUnitGroups.KEY, ArmedCitizenryUnitGroups.Entry);
      return collection.find(entry => entry.unitGroup === this._unitGroup);
    }
    
    get unit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unit);
    }
  }
}

export default ArmedCitizenryUnitsToUnitGroupsJunctions;
