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
        get effect(): Effects.Entry | undefined;
        get meleeWeapon(): UnitMeleeWeaponsEnum.Entry | undefined;
        get statModifier(): UnitStatModifiers.Entry | undefined;
    }
}
export default EffectBonusValueMeleeWeaponJunction;
