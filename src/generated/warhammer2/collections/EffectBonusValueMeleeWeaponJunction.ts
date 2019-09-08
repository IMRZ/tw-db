
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { UnitMeleeWeaponsEnum } from "./UnitMeleeWeaponsEnum";
import { UnitStatModifiers } from "./UnitStatModifiers";

export namespace EffectBonusValueMeleeWeaponJunction {
  export const KEY = new CollectionKey("effect_bonus_value_melee_weapon_junction");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _meleeWeapon: string;
    readonly _statModifier: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._meleeWeapon = values["melee_weapon"];
      this._statModifier = values["stat_modifier"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get meleeWeapon(): UnitMeleeWeaponsEnum.Entry | undefined {
      const collection = <UnitMeleeWeaponsEnum.Entry[]>this.collectionCache.getCollection(UnitMeleeWeaponsEnum.KEY, UnitMeleeWeaponsEnum.Entry);
      return collection.find(entry => entry.key === this._meleeWeapon);
    }
    
    get statModifier(): UnitStatModifiers.Entry | undefined {
      const collection = <UnitStatModifiers.Entry[]>this.collectionCache.getCollection(UnitStatModifiers.KEY, UnitStatModifiers.Entry);
      return collection.find(entry => entry.key === this._statModifier);
    }
  }
}

export default EffectBonusValueMeleeWeaponJunction;
