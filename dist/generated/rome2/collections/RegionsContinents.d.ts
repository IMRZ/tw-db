import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace RegionsContinents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly continent: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default RegionsContinents;
