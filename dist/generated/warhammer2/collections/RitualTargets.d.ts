import { CollectionCache, CollectionKey } from "../../../common";
import { RitualFactionTargetCriterias } from "./RitualFactionTargetCriterias";
import { RitualMilitaryForceTargetCriterias } from "./RitualMilitaryForceTargetCriterias";
import { RitualRegionTargetCriterias } from "./RitualRegionTargetCriterias";
export declare namespace RitualTargets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _factionCriteria: string;
        readonly _militaryForceCriteria: string;
        readonly _regionCriteria: string;
        constructor(collectionCache: CollectionCache, values: any);
        get factionCriteria(): RitualFactionTargetCriterias.Entry | undefined;
        get militaryForceCriteria(): RitualMilitaryForceTargetCriterias.Entry | undefined;
        get regionCriteria(): RitualRegionTargetCriterias.Entry | undefined;
    }
}
export default RitualTargets;
