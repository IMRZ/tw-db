import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace EncyclopediaHistoricalInfoPages {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly pageKey: string;
        readonly title: string;
        readonly template: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default EncyclopediaHistoricalInfoPages;
