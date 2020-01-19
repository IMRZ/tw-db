import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BuildingInstances {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly numInstances: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BuildingInstances;
