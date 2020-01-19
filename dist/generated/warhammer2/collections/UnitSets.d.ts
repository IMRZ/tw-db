import { CollectionCache, CollectionKey } from "../../../common";
import { SpecialUnitCategories } from "./SpecialUnitCategories";
export declare namespace UnitSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly useUnitExpLevelRange: boolean;
        readonly minUnitExpLevelInclusive: number;
        readonly maxUnitExpLevelInclusive: number;
        readonly _specialCategory: string;
        constructor(collectionCache: CollectionCache, values: any);
        get specialCategory(): SpecialUnitCategories.Entry | undefined;
    }
}
export default UnitSets;
