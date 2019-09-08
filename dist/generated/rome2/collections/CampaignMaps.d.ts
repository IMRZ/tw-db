import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignMaps {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly mapname: string;
        readonly minx: number;
        readonly miny: number;
        readonly maxx: number;
        readonly maxy: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignMaps;
