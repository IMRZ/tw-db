import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace DiseasesGenerationChance {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _disease: any;
        readonly _continent: any;
        readonly baseGenerationChance: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default DiseasesGenerationChance;
