import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CaiPersonalitiesCharacterSkillSelectionPolicies {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly priorityChainSelectionWeightMean: number;
        readonly priorityChainSelectionWeightStandardDeviation: number;
        readonly priorityChainSelectionWeightMinimum: number;
        readonly priorityChainSelectionWeightMaximum: number;
        readonly existingSkillSelectionWeightMean: number;
        readonly existingSkillSelectionWeightStandardDeviation: number;
        readonly existingSkillSelectionWeightMinimum: number;
        readonly existingSkillSelectionWeightMaximum: number;
        readonly skillUtilizationDefaultMultiplier: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CaiPersonalitiesCharacterSkillSelectionPolicies;
