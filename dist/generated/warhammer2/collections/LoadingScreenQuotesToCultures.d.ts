import { CollectionCache, CollectionKey } from "../../../common";
import { LoadingScreenQuotes } from "./LoadingScreenQuotes";
import { Cultures } from "./Cultures";
export declare namespace LoadingScreenQuotesToCultures {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _loadingQuote: string;
        readonly _culture: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly loadingQuote: LoadingScreenQuotes.Entry | undefined;
        readonly culture: Cultures.Entry | undefined;
    }
}
export default LoadingScreenQuotesToCultures;
