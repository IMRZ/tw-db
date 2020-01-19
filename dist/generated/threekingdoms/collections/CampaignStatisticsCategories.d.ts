import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignStatisticsCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedDescription: string;
        readonly categoryOrder: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignStatisticsCategories;
