import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UnitStatsNavalExperienceBonuses {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly xpLevel: number;
        readonly meleeDefence: number;
        readonly meleeAttack: number;
        readonly coreGunnerLoadingSkill: number;
        readonly coreGunnerMarksmanship: number;
        readonly morale: number;
        readonly mpFixedCost: number;
        readonly mpExperienceCostMultiplier: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UnitStatsNavalExperienceBonuses;
