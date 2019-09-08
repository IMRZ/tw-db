import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { UnitMeleeWeaponsEnum } from "./UnitMeleeWeaponsEnum";
import { UnitStatModifiers } from "./UnitStatModifiers";
export declare namespace EffectBonusValueMeleeWeaponJunction {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _meleeWeapon: string;
        readonly _statModifier: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effect: Effects.Entry | undefined;
        readonly meleeWeapon: UnitMeleeWeaponsEnum.Entry | undefined;
        readonly statModifier: UnitStatModifiers.Entry | undefined;
    }
}
export default EffectBonusValueMeleeWeaponJunction;
