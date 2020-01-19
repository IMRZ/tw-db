import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace SettlementSiegeActionOutcomes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly outcome: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default SettlementSiegeActionOutcomes;
