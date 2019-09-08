
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { Technologies } from "./Technologies";

export namespace BuildingLevelRequiredTechnologyJunctions {
  export const KEY = new CollectionKey("building_level_required_technology_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _buildingLevelKey: string;
    readonly _technologyKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._buildingLevelKey = values["building_level_key"];
      this._technologyKey = values["technology_key"];
    }
    
    get buildingLevelKey(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingLevelKey);
    }
    
    get technologyKey(): Technologies.Entry | undefined {
      const collection = <Technologies.Entry[]>this.collectionCache.getCollection(Technologies.KEY, Technologies.Entry);
      return collection.find(entry => entry.key === this._technologyKey);
    }
  }
}

export default BuildingLevelRequiredTechnologyJunctions;
