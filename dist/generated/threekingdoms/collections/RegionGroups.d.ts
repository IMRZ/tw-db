import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace RegionGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly groupKey: string;
        readonly localisedName: string;
        readonly round: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default RegionGroups;
