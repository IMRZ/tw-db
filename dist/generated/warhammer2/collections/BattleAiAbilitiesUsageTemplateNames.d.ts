import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BattleAiAbilitiesUsageTemplateNames {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly aiAbilityUsageTemplateKey: string;
        readonly factorBias: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BattleAiAbilitiesUsageTemplateNames;
