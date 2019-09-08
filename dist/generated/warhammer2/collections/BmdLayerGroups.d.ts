import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BmdLayerGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BmdLayerGroups;
