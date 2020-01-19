
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";

export namespace BuildingUpgradesJunction {
  export const KEY = new CollectionKey("building_upgrades_junction");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _from: string;
    readonly _to: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._from = values["from"];
      this._to = values["to"];
    }
    
    get from(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._from);
    }
    
    get to(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._to);
    }
  }
}

export default BuildingUpgradesJunction;
