import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace RegionsSea {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly seaRegionKey: string;
        readonly onscreenName: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default RegionsSea;
