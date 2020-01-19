import { CollectionCache, CollectionKey } from "../../../common";
import { AiUsageGroups } from "./AiUsageGroups";
export declare namespace AutoresolverAiUsageGroupCombatPotentialModifiers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _usageGroup: string;
        readonly additiveMod: number;
        readonly multiplier: number;
        constructor(collectionCache: CollectionCache, values: any);
        get usageGroup(): AiUsageGroups.Entry | undefined;
    }
}
export default AutoresolverAiUsageGroupCombatPotentialModifiers;
