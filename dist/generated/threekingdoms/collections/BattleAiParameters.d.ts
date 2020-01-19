import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BattleAiParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly parameter: string;
        readonly default: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BattleAiParameters;
