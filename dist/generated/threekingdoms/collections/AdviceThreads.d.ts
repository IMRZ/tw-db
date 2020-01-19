import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AdviceThreads {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly thread: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AdviceThreads;
