import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace DiseasesCultureDeaths {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _disease: any;
        readonly _culture: any;
        readonly mortalityRate: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default DiseasesCultureDeaths;
