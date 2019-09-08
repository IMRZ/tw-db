import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { UnitStatModifiers } from "./UnitStatModifiers";
export declare namespace EffectBonusValueUnitStatModifiersJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _statModifier: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effect: Effects.Entry | undefined;
        readonly statModifier: UnitStatModifiers.Entry | undefined;
    }
}
export default EffectBonusValueUnitStatModifiersJunctions;
