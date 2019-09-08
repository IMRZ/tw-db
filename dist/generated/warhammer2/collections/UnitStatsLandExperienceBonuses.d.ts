import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UnitStatsLandExperienceBonuses {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly xpLevel: number;
        readonly fatigue: number;
        readonly mpFixedCost: number;
        readonly mpExperienceCostMultiplier: number;
        readonly additionalMeleeCp: number;
        readonly additionalMissileCp: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UnitStatsLandExperienceBonuses;
