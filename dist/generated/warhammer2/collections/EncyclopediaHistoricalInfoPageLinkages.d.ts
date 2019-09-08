import { CollectionCache, CollectionKey } from "../../../common";
import { EncyclopediaHistoricalInfoPages } from "./EncyclopediaHistoricalInfoPages";
export declare namespace EncyclopediaHistoricalInfoPageLinkages {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _pageKey: string;
        readonly _parentKey: string;
        readonly _nextKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly pageKey: EncyclopediaHistoricalInfoPages.Entry | undefined;
        readonly parentKey: EncyclopediaHistoricalInfoPages.Entry | undefined;
        readonly nextKey: EncyclopediaHistoricalInfoPages.Entry | undefined;
    }
}
export default EncyclopediaHistoricalInfoPageLinkages;
