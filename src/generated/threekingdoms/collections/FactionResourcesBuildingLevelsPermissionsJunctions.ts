
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { FactionResourceIds } from "./FactionResourceIds";

export namespace FactionResourcesBuildingLevelsPermissionsJunctions {
  export const KEY = new CollectionKey("faction_resources_building_levels_permissions_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _buildingLevelRecord: string;
    readonly _factionResourceIdFlag: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._buildingLevelRecord = values["building_level_record"];
      this._factionResourceIdFlag = values["faction_resource_id_flag"];
    }
    
    get buildingLevelRecord(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingLevelRecord);
    }
    
    get factionResourceIdFlag(): FactionResourceIds.Entry | undefined {
      const collection = <FactionResourceIds.Entry[]>this.collectionCache.getCollection(FactionResourceIds.KEY, FactionResourceIds.Entry);
      return collection.find(entry => entry.factionResourceFlag === this._factionResourceIdFlag);
    }
  }
}

export default FactionResourcesBuildingLevelsPermissionsJunctions;
