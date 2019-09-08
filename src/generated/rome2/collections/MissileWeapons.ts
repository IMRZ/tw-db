
import { CollectionCache, CollectionKey } from "../../../common";
import { Projectiles } from "./Projectiles";

export namespace MissileWeapons {
  export const KEY = new CollectionKey("missile_weapons");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly precursor: boolean;
    readonly _defaultProjectile: string;
    readonly canFireAtBuildings: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.precursor = !!values["precursor"];
      this._defaultProjectile = values["default_projectile"];
      this.canFireAtBuildings = !!values["can_fire_at_buildings"];
    }
    
    get defaultProjectile(): Projectiles.Entry | undefined {
      const collection = <Projectiles.Entry[]>this.collectionCache.getCollection(Projectiles.KEY, Projectiles.Entry);
      return collection.find(entry => entry.key === this._defaultProjectile);
    }
  }
}

export default MissileWeapons;
