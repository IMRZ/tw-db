import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace MovieEventStrings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly event: string;
        readonly _culture: any;
        readonly title: string;
        readonly movie: string;
        readonly id: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default MovieEventStrings;
