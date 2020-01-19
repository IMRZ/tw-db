
import { CollectionCache, CollectionKey } from "../../../common";
import { MissileWeapons } from "./MissileWeapons";
import { Projectiles } from "./Projectiles";

export namespace MissileWeaponsToProjectiles {
  export const KEY = new CollectionKey("missile_weapons_to_projectiles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _missileWeapon: string;
    readonly _projectile: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._missileWeapon = values["missile_weapon"];
      this._projectile = values["projectile"];
    }
    
    get missileWeapon(): MissileWeapons.Entry | undefined {
      const collection = <MissileWeapons.Entry[]>this.collectionCache.getCollection(MissileWeapons.KEY, MissileWeapons.Entry);
      return collection.find(entry => entry.key === this._missileWeapon);
    }
    
    get projectile(): Projectiles.Entry | undefined {
      const collection = <Projectiles.Entry[]>this.collectionCache.getCollection(Projectiles.KEY, Projectiles.Entry);
      return collection.find(entry => entry.key === this._projectile);
    }
  }
}

export default MissileWeaponsToProjectiles;
