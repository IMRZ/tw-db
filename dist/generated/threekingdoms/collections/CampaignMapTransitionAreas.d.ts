import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignMapTransitionAreas {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _mapname: any;
        readonly index: number;
        readonly minx: number;
        readonly miny: number;
        readonly maxx: number;
        readonly maxy: number;
        readonly stormChancePercentage: number;
        readonly onscreenName: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignMapTransitionAreas;
