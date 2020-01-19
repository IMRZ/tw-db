import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BattleAiPersonalities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly personality: string;
        readonly priority: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BattleAiPersonalities;
