import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace SettlementSiegeActionOptionTooltips {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly tooltip: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default SettlementSiegeActionOptionTooltips;
