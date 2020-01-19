import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UnitSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly useUnitExpLevelRange: boolean;
        readonly minUnitExpLevelInclusive: number;
        readonly maxUnitExpLevelInclusive: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UnitSets;
