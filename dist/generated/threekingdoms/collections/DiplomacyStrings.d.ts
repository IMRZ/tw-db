import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace DiplomacyStrings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly string: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default DiplomacyStrings;
