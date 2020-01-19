
import { CollectionCache, CollectionKey } from "../../../common";
import { Technologies } from "./Technologies";
import { BuildingLevels } from "./BuildingLevels";

export namespace TechnologyRequiredBuildingLevelsJunctions {
  export const KEY = new CollectionKey("technology_required_building_levels_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _technology: string;
    readonly _requiredBuildingLevel: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._technology = values["technology"];
      this._requiredBuildingLevel = values["required_building_level"];
    }
    
    get technology(): Technologies.Entry | undefined {
      const collection = <Technologies.Entry[]>this.collectionCache.getCollection(Technologies.KEY, Technologies.Entry);
      return collection.find(entry => entry.key === this._technology);
    }
    
    get requiredBuildingLevel(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._requiredBuildingLevel);
    }
  }
}

export default TechnologyRequiredBuildingLevelsJunctions;
