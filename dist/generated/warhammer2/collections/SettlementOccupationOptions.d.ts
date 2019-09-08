import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace SettlementOccupationOptions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly sortOrder: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default SettlementOccupationOptions;
