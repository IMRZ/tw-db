import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace QuotesPeople {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly quotePersonKey: string;
        readonly quotePersonOnscreen: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default QuotesPeople;
