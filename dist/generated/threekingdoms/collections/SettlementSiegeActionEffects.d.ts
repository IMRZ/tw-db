import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace SettlementSiegeActionEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly effects: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default SettlementSiegeActionEffects;
