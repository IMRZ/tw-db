import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CaiFactionStatuses {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly factionStatus: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CaiFactionStatuses;
