import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignInitialLoyaltyDistribution {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly roll: number;
        readonly loyalty: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignInitialLoyaltyDistribution;
