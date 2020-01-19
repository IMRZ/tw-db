import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace SettlementSiegeActionEffectCostTargets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly target: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default SettlementSiegeActionEffectCostTargets;
