
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingSets } from "./BuildingSets";
import { BuildingLevels } from "./BuildingLevels";
import { BuildingChains } from "./BuildingChains";

export namespace BuildingSetToBuildingJunctions {
  export const KEY = new CollectionKey("building_set_to_building_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _buildingSet: string;
    readonly _buildingLevel: string;
    readonly _buildingChain: string;
    readonly exclude: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._buildingSet = values["building_set"];
      this._buildingLevel = values["building_level"];
      this._buildingChain = values["building_chain"];
      this.exclude = !!values["exclude"];
    }
    
    get buildingSet(): BuildingSets.Entry | undefined {
      const collection = <BuildingSets.Entry[]>this.collectionCache.getCollection(BuildingSets.KEY, BuildingSets.Entry);
      return collection.find(entry => entry.key === this._buildingSet);
    }
    
    get buildingLevel(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingLevel);
    }
    
    get buildingChain(): BuildingChains.Entry | undefined {
      const collection = <BuildingChains.Entry[]>this.collectionCache.getCollection(BuildingChains.KEY, BuildingChains.Entry);
      return collection.find(entry => entry.key === this._buildingChain);
    }
  }
}

export default BuildingSetToBuildingJunctions;
