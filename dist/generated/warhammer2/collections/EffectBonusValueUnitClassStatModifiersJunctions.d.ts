import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { UnitClass } from "./UnitClass";
import { UnitStatModifiers } from "./UnitStatModifiers";
export declare namespace EffectBonusValueUnitClassStatModifiersJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _class: string;
        readonly _statModifier: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get class(): UnitClass.Entry | undefined;
        get statModifier(): UnitStatModifiers.Entry | undefined;
    }
}
export default EffectBonusValueUnitClassStatModifiersJunctions;
