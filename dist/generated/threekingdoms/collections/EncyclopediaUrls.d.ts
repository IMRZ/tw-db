import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace EncyclopediaUrls {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly type: string;
        readonly url: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default EncyclopediaUrls;
