import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace MovieEvents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly event: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default MovieEvents;
