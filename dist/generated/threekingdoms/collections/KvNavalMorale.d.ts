import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace KvNavalMorale {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly value: number;
        readonly description: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default KvNavalMorale;
