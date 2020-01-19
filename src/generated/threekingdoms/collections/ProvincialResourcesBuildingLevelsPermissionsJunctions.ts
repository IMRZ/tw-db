
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { ProvincialResourceIds } from "./ProvincialResourceIds";

export namespace ProvincialResourcesBuildingLevelsPermissionsJunctions {
  export const KEY = new CollectionKey("provincial_resources_building_levels_permissions_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _buildingLevelRecord: string;
    readonly _provincialResourceIdFlag: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._buildingLevelRecord = values["building_level_record"];
      this._provincialResourceIdFlag = values["provincial_resource_id_flag"];
    }
    
    get buildingLevelRecord(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingLevelRecord);
    }
    
    get provincialResourceIdFlag(): ProvincialResourceIds.Entry | undefined {
      const collection = <ProvincialResourceIds.Entry[]>this.collectionCache.getCollection(ProvincialResourceIds.KEY, ProvincialResourceIds.Entry);
      return collection.find(entry => entry.provincialResourceFlag === this._provincialResourceIdFlag);
    }
  }
}

export default ProvincialResourcesBuildingLevelsPermissionsJunctions;
