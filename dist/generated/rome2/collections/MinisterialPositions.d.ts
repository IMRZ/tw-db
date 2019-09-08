import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace MinisterialPositions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly ministerKey: string;
        readonly rank: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default MinisterialPositions;
