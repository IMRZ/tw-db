import { CollectionCache, CollectionKey } from "../../../common";
import { LoadingScreenQuotesCategories } from "./LoadingScreenQuotesCategories";
import { TexcExpansions } from "./TexcExpansions";
export declare namespace LoadingScreenQuotes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly title: string;
        readonly image: string;
        readonly bulletpoints: string;
        readonly description: string;
        readonly _category: string;
        readonly _gameExpansionKey: string;
        readonly maxDisplays: number;
        readonly weighting: number;
        readonly firstShownWeighting: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly category: LoadingScreenQuotesCategories.Entry | undefined;
        readonly gameExpansionKey: TexcExpansions.Entry | undefined;
    }
}
export default LoadingScreenQuotes;
