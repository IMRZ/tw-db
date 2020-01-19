import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace FactionFeatureTrees {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default FactionFeatureTrees;
