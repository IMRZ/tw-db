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
        readonly quote: LoadingScreenQuotes.Entry | undefined;
        readonly unit: MainUnits.Entry | undefined;
    }
}
export default LoadingScreenQuotesToUnits;
