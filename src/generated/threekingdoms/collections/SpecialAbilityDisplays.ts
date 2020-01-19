
import { CollectionCache, CollectionKey } from "../../../common";
import { ParticleEffects } from "./ParticleEffects";

export namespace SpecialAbilityDisplays {
  export const KEY = new CollectionKey("special_ability_displays");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly saDisplayKey: string;
    readonly _windUpWeaponVfx: string;
    readonly _windUpAuraVfx: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.saDisplayKey = values["sa_display_key"];
      this._windUpWeaponVfx = values["wind_up_weapon_vfx"];
      this._windUpAuraVfx = values["wind_up_aura_vfx"];
    }
    
    get windUpWeaponVfx(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._windUpWeaponVfx);
    }
    
    get windUpAuraVfx(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._windUpAuraVfx);
    }
  }
}

export default SpecialAbilityDisplays;
