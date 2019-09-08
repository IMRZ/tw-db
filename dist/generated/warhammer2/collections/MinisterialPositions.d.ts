import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace MinisterialPositions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly ministerKey: string;
        readonly rank: number;
        readonly minimumAge: number;
        readonly maximumAge: number;
        readonly order: number;
        readonly cost: number;
        readonly gravitasWorth: number;
        readonly minimumTermLength: number;
        readonly maximumTermLength: number;
        readonly maximumConcurrentMinisters: number;
        readonly requiredLoyalty: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default MinisterialPositions;
