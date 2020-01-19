
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";

export namespace EncyclopediaBuildingRedirects {
  export const KEY = new CollectionKey("encyclopedia_building_redirects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _building: string;
    readonly _redirectBuilding: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._building = values["building"];
      this._redirectBuilding = values["redirect_building"];
    }
    
    get building(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._building);
    }
    
    get redirectBuilding(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._redirectBuilding);
    }
  }
}

export default EncyclopediaBuildingRedirects;
