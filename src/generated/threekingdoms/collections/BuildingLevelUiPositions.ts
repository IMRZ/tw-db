
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";

export namespace BuildingLevelUiPositions {
  export const KEY = new CollectionKey("building_level_ui_positions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _buildingLevel: string;
    readonly posX: number;
    readonly posY: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._buildingLevel = values["building_level"];
      this.posX = values["pos_x"];
      this.posY = values["pos_y"];
    }
    
    get buildingLevel(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingLevel);
    }
  }
}

export default BuildingLevelUiPositions;
