import { CollectionCache, CollectionKey } from "../../../common";
import { MovieEvents } from "./MovieEvents";
export declare namespace MovieEventStrings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _event: string;
        readonly _culture: any;
        readonly title: string;
        readonly movie: string;
        readonly id: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly event: MovieEvents.Entry | undefined;
    }
}
export default MovieEventStrings;
