import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace KvWindsOfMagicParams {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly value: string;
        readonly description: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default KvWindsOfMagicParams;
