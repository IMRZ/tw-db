import { CollectionCache, CollectionKey } from "../../../common";
import { LoadingScreenQuotes } from "./LoadingScreenQuotes";
import { MainUnits } from "./MainUnits";
export declare namespace LoadingScreenQuotesToUnits {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _quote: string;
        readonly _unit: string;
        constructor(collectionCache: CollectionCache, values: any);
        get quote(): LoadingScreenQuotes.Entry | undefined;
        get unit(): MainUnits.Entry | undefined;
    }
}
export default LoadingScreenQuotesToUnits;
