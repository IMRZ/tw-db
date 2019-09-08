import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace LoadingScreenQuotesCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly category: string;
        readonly categoryWeighting: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default LoadingScreenQuotesCategories;
