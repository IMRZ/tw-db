
import { CollectionCache, CollectionKey } from "../../../common";
import { Projectiles } from "./Projectiles";
import { AudioMissileWeaponTypes } from "./AudioMissileWeaponTypes";

export namespace MissileWeapons {
  export const KEY = new CollectionKey("missile_weapons");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly precursor: boolean;
    readonly _defaultProjectile: string;
    readonly _audioType: string;
    readonly useSecondaryAmmoPool: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.precursor = !!values["precursor"];
      this._defaultProjectile = values["default_projectile"];
      this._audioType = values["audio_type"];
      this.useSecondaryAmmoPool = !!values["use_secondary_ammo_pool"];
    }
    
    get defaultProjectile(): Projectiles.Entry | undefined {
      const collection = <Projectiles.Entry[]>this.collectionCache.getCollection(Projectiles.KEY, Projectiles.Entry);
      return collection.find(entry => entry.key === this._defaultProjectile);
    }
    
    get audioType(): AudioMissileWeaponTypes.Entry | undefined {
      const collection = <AudioMissileWeaponTypes.Entry[]>this.collectionCache.getCollection(AudioMissileWeaponTypes.KEY, AudioMissileWeaponTypes.Entry);
      return collection.find(entry => entry.key === this._audioType);
    }
  }
}

export default MissileWeapons;
