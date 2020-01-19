import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BattleAiAbilitiesUsageParams {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly usageParam: string;
        readonly multiplier: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BattleAiAbilitiesUsageParams;
