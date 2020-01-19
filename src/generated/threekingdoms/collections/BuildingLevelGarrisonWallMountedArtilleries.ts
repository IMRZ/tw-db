
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { MainUnits } from "./MainUnits";

export namespace BuildingLevelGarrisonWallMountedArtilleries {
  export const KEY = new CollectionKey("building_level_garrison_wall_mounted_artilleries");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _buildingLevel: string;
    readonly _artilleryUnit: string;
    readonly amount: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._buildingLevel = values["building_level"];
      this._artilleryUnit = values["artillery_unit"];
      this.amount = values["amount"];
    }
    
    get buildingLevel(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingLevel);
    }
    
    get artilleryUnit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._artilleryUnit);
    }
  }
}

export default BuildingLevelGarrisonWallMountedArtilleries;
