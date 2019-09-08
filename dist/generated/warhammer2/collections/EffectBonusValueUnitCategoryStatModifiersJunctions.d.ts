import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { UnitCategory } from "./UnitCategory";
import { UnitStatModifiers } from "./UnitStatModifiers";
export declare namespace EffectBonusValueUnitCategoryStatModifiersJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _category: string;
        readonly _statModifier: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effect: Effects.Entry | undefined;
        readonly category: UnitCategory.Entry | undefined;
        readonly statModifier: UnitStatModifiers.Entry | undefined;
    }
}
export default EffectBonusValueUnitCategoryStatModifiersJunctions;
