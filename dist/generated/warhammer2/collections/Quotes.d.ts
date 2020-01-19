import { CollectionCache, CollectionKey } from "../../../common";
import { QuotesPeople } from "./QuotesPeople";
export declare namespace Quotes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly quoteOnscreen: string;
        readonly _quotePerson: string;
        readonly key: number;
        constructor(collectionCache: CollectionCache, values: any);
        get quotePerson(): QuotesPeople.Entry | undefined;
    }
}
export default Quotes;
