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
        readonly effect: Effects.Entry | undefined;
        readonly class: UnitClass.Entry | undefined;
        readonly statModifier: UnitStatModifiers.Entry | undefined;
    }
}
export default EffectBonusValueUnitClassStatModifiersJunctions;
