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
        readonly fameLevelRequirement: number;
        readonly powerRating: number;
        readonly mustHaveComeOfAge: boolean;
        readonly maximumConcurrentMinistersCappedByNumPossibleGovernors: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default MinisterialPositions;
