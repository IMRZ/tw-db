
import { CollectionCache, CollectionKey } from "../../../common";
import { GunTypes } from "./GunTypes";
import { Projectiles } from "./Projectiles";
import { GunTypeMuzzleFlashEnum } from "./GunTypeMuzzleFlashEnum";

export namespace GunTypeToProjectiles {
  export const KEY = new CollectionKey("gun_type_to_projectiles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _gunType: string;
    readonly _shotType: string;
    readonly _muzzleFlash: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._gunType = values["gun_type"];
      this._shotType = values["shot_type"];
      this._muzzleFlash = values["muzzle_flash"];
    }
    
    get gunType(): GunTypes.Entry | undefined {
      const collection = <GunTypes.Entry[]>this.collectionCache.getCollection(GunTypes.KEY, GunTypes.Entry);
      return collection.find(entry => entry.gunType === this._gunType);
    }
    
    get shotType(): Projectiles.Entry | undefined {
      const collection = <Projectiles.Entry[]>this.collectionCache.getCollection(Projectiles.KEY, Projectiles.Entry);
      return collection.find(entry => entry.key === this._shotType);
    }
    
    get muzzleFlash(): GunTypeMuzzleFlashEnum.Entry | undefined {
      const collection = <GunTypeMuzzleFlashEnum.Entry[]>this.collectionCache.getCollection(GunTypeMuzzleFlashEnum.KEY, GunTypeMuzzleFlashEnum.Entry);
      return collection.find(entry => entry.key === this._muzzleFlash);
    }
  }
}

export default GunTypeToProjectiles;
