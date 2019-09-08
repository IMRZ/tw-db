
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";

export namespace CentralisedUpgradeBuildingLevelJunctions {
  export const KEY = new CollectionKey("centralised_upgrade_building_level_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _upgradedBuildingLevel: string;
    readonly _centralBuildingLevel: string;
    readonly priority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._upgradedBuildingLevel = values["upgraded_building_level"];
      this._centralBuildingLevel = values["central_building_level"];
      this.priority = values["priority"];
    }
    
    get upgradedBuildingLevel(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._upgradedBuildingLevel);
    }
    
    get centralBuildingLevel(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._centralBuildingLevel);
    }
  }
}

export default CentralisedUpgradeBuildingLevelJunctions;
