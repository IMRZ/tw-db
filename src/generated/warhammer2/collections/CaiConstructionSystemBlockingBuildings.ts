
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiConstructionSystemBlockingCategories } from "./CaiConstructionSystemBlockingCategories";
import { BuildingLevels } from "./BuildingLevels";

export namespace CaiConstructionSystemBlockingBuildings {
  export const KEY = new CollectionKey("cai_construction_system_blocking_buildings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _category: string;
    readonly _buildingStart: string;
    readonly _buildingEnd: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._category = values["category"];
      this._buildingStart = values["building_start"];
      this._buildingEnd = values["building_end"];
    }
    
    get category(): CaiConstructionSystemBlockingCategories.Entry | undefined {
      const collection = <CaiConstructionSystemBlockingCategories.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemBlockingCategories.KEY, CaiConstructionSystemBlockingCategories.Entry);
      return collection.find(entry => entry.key === this._category);
    }
    
    get buildingStart(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingStart);
    }
    
    get buildingEnd(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingEnd);
    }
  }
}

export default CaiConstructionSystemBlockingBuildings;
