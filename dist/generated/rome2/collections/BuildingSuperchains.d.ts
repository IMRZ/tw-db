import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BuildingSuperchains {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly maxInstancesPerRegion: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BuildingSuperchains;
