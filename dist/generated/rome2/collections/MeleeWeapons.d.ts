import { CollectionCache, CollectionKey } from "../../../common";
import { UnitMeleeWeaponsEnum } from "./UnitMeleeWeaponsEnum";
import { AudioMaterialsEnums } from "./AudioMaterialsEnums";
export declare namespace MeleeWeapons {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
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
        constructor(collectionCache: CollectionCache, values: any);
        readonly meleeWeaponType: UnitMeleeWeaponsEnum.Entry | undefined;
        readonly audioMaterial: AudioMaterialsEnums.Entry | undefined;
    }
}
export default MeleeWeapons;
