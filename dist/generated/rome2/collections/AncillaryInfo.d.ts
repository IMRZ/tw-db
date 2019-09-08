import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AncillaryInfo {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly ancillary: string;
        readonly historicalExample: string;
        readonly author: string;
        readonly comment: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AncillaryInfo;
