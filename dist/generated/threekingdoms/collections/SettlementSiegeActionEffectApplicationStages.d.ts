import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace SettlementSiegeActionEffectApplicationStages {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly applicationStage: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default SettlementSiegeActionEffectApplicationStages;
