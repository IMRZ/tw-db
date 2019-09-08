
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitMeleeWeaponsEnum } from "./UnitMeleeWeaponsEnum";
import { AudioMaterialsEnums } from "./AudioMaterialsEnums";

export namespace MeleeWeapons {
  export const KEY = new CollectionKey("melee_weapons");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly damage: number;
    readonly apDamage: number;
    readonly firstStrike: number;
    readonly bonusVInfantry: number;
    readonly bonusVCavalry: number;
    readonly bonusVElephants: number;
    readonly armourPiercing: boolean;
    readonly shieldPiercing: boolean;
    readonly armourPenetrating: boolean;
    readonly weaponLength: number;
    readonly _meleeWeaponType: string;
    readonly _audioMaterial: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.damage = values["damage"];
      this.apDamage = values["ap_damage"];
      this.firstStrike = values["first_strike"];
      this.bonusVInfantry = values["bonus_v_infantry"];
      this.bonusVCavalry = values["bonus_v_cavalry"];
      this.bonusVElephants = values["bonus_v_elephants"];
      this.armourPiercing = !!values["armour_piercing"];
      this.shieldPiercing = !!values["shield_piercing"];
      this.armourPenetrating = !!values["armour_penetrating"];
      this.weaponLength = values["weapon_length"];
      this._meleeWeaponType = values["melee_weapon_type"];
      this._audioMaterial = values["audio_material"];
    }
    
    get meleeWeaponType(): UnitMeleeWeaponsEnum.Entry | undefined {
      const collection = <UnitMeleeWeaponsEnum.Entry[]>this.collectionCache.getCollection(UnitMeleeWeaponsEnum.KEY, UnitMeleeWeaponsEnum.Entry);
      return collection.find(entry => entry.key === this._meleeWeaponType);
    }
    
    get audioMaterial(): AudioMaterialsEnums.Entry | undefined {
      const collection = <AudioMaterialsEnums.Entry[]>this.collectionCache.getCollection(AudioMaterialsEnums.KEY, AudioMaterialsEnums.Entry);
      return collection.find(entry => entry.key === this._audioMaterial);
    }
  }
}

export default MeleeWeapons;
