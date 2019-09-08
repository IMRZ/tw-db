import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace TExcUnrestDemands {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly demand: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default TExcUnrestDemands;
