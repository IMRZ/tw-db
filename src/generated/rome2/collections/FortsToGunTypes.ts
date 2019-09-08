
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { GunTypes } from "./GunTypes";

export namespace FortsToGunTypes {
  export const KEY = new CollectionKey("forts_to_gun_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly _gunType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this._gunType = values["gun_type"];
    }
    
    get key(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._key);
    }
    
    get gunType(): GunTypes.Entry | undefined {
      const collection = <GunTypes.Entry[]>this.collectionCache.getCollection(GunTypes.KEY, GunTypes.Entry);
      return collection.find(entry => entry.gunType === this._gunType);
    }
  }
}

export default FortsToGunTypes;
