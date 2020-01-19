
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { PrefabTypes } from "./PrefabTypes";

export namespace BuildingLevelToCampaignMapPrefabTypes {
  export const KEY = new CollectionKey("building_level_to_campaign_map_prefab_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _buildingLevel: string;
    readonly _prefabType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._buildingLevel = values["building_level"];
      this._prefabType = values["prefab_type"];
    }
    
    get buildingLevel(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingLevel);
    }
    
    get prefabType(): PrefabTypes.Entry | undefined {
      const collection = <PrefabTypes.Entry[]>this.collectionCache.getCollection(PrefabTypes.KEY, PrefabTypes.Entry);
      return collection.find(entry => entry.prefabType === this._prefabType);
    }
  }
}

export default BuildingLevelToCampaignMapPrefabTypes;
