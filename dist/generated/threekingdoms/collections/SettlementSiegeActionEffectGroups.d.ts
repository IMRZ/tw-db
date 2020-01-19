import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace SettlementSiegeActionEffectGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly effectGroup: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default SettlementSiegeActionEffectGroups;
