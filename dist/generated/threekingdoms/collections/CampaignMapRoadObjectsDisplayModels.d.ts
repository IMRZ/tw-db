import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignMapRoadObjectsDisplayModels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly speed: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignMapRoadObjectsDisplayModels;
