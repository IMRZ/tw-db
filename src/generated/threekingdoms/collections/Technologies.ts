
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";

export namespace Technologies {
  export const KEY = new CollectionKey("technologies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _buildingLevel: string;
    readonly positionIndex: number;
    readonly onscreenName: string;
    readonly shortDescription: string;
    readonly longDescription: string;
    readonly iconName: string;
    readonly mpAvailableEarly: boolean;
    readonly mpAvailableLate: boolean;
    readonly infoPic: string;
    readonly uniqueIndex: number;
    readonly inEncyclopedia: boolean;
    readonly isCivil: boolean;
    readonly isEngineering: boolean;
    readonly isMilitary: boolean;
    readonly income: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._buildingLevel = values["building_level"];
      this.positionIndex = values["position_index"];
      this.onscreenName = values["onscreen_name"];
      this.shortDescription = values["short_description"];
      this.longDescription = values["long_description"];
      this.iconName = values["icon_name"];
      this.mpAvailableEarly = !!values["mp_available_early"];
      this.mpAvailableLate = !!values["mp_available_late"];
      this.infoPic = values["info_pic"];
      this.uniqueIndex = values["unique_index"];
      this.inEncyclopedia = !!values["in_encyclopedia"];
      this.isCivil = !!values["is_civil"];
      this.isEngineering = !!values["is_engineering"];
      this.isMilitary = !!values["is_military"];
      this.income = values["income"];
    }
    
    get buildingLevel(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingLevel);
    }
  }
}

export default Technologies;
