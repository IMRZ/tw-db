import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace SpottingAndHidingValues {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly visibilityMinSpotRange: number;
        readonly visibilityMaxSpotRange: number;
        readonly spotDistTree: number;
        readonly spotDistScrub: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default SpottingAndHidingValues;
