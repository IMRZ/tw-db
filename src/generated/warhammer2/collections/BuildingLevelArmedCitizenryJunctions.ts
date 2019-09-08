
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { ArmedCitizenryUnitGroups } from "./ArmedCitizenryUnitGroups";

export namespace BuildingLevelArmedCitizenryJunctions {
  export const KEY = new CollectionKey("building_level_armed_citizenry_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _buildingLevel: string;
    readonly _unitGroup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._buildingLevel = values["building_level"];
      this._unitGroup = values["unit_group"];
    }
    
    get buildingLevel(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingLevel);
    }
    
    get unitGroup(): ArmedCitizenryUnitGroups.Entry | undefined {
      const collection = <ArmedCitizenryUnitGroups.Entry[]>this.collectionCache.getCollection(ArmedCitizenryUnitGroups.KEY, ArmedCitizenryUnitGroups.Entry);
      return collection.find(entry => entry.unitGroup === this._unitGroup);
    }
  }
}

export default BuildingLevelArmedCitizenryJunctions;
