import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AudioProjectileLimitations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly nearInside: number;
        readonly nearOutside: number;
        readonly farInside: number;
        readonly farOutside: number;
        readonly uncapped: boolean;
        readonly maxDistance: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AudioProjectileLimitations;
