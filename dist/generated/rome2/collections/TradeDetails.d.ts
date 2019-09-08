import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace TradeDetails {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly onscreenText: string;
        readonly iconFilepath: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default TradeDetails;
