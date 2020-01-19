import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace SettlementSiegeSituations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly situation: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default SettlementSiegeSituations;
