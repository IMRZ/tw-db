import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignStatisticsAffixes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly affix: string;
        readonly localisedDescription: string;
        readonly isSuffix: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignStatisticsAffixes;
