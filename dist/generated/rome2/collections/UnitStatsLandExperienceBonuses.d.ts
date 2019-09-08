import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UnitStatsLandExperienceBonuses {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly xpLevel: number;
        readonly meleeAttack: number;
        readonly meleeDefence: number;
        readonly coreReloadingSkill: number;
        readonly morale: number;
        readonly coreMarksmanship: number;
        readonly fatigue: number;
        readonly mpFixedCost: number;
        readonly mpExperienceCostMultiplier: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UnitStatsLandExperienceBonuses;
