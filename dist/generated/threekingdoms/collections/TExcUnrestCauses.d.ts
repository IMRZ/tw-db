import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace TExcUnrestCauses {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly cause: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default TExcUnrestCauses;
