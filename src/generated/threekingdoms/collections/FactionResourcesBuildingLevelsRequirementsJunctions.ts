
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { FactionResourcesRequirementSets } from "./FactionResourcesRequirementSets";

export namespace FactionResourcesBuildingLevelsRequirementsJunctions {
  export const KEY = new CollectionKey("faction_resources_building_levels_requirements_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _buildingLevelRecord: string;
    readonly _setId: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._buildingLevelRecord = values["building_level_record"];
      this._setId = values["set_id"];
    }
    
    get buildingLevelRecord(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingLevelRecord);
    }
    
    get setId(): FactionResourcesRequirementSets.Entry | undefined {
      const collection = <FactionResourcesRequirementSets.Entry[]>this.collectionCache.getCollection(FactionResourcesRequirementSets.KEY, FactionResourcesRequirementSets.Entry);
      return collection.find(entry => entry.setId === this._setId);
    }
  }
}

export default FactionResourcesBuildingLevelsRequirementsJunctions;
