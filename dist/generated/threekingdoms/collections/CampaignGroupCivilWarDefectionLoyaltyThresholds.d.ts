import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
export declare namespace CampaignGroupCivilWarDefectionLoyaltyThresholds {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly loyaltyThresholdValue: number;
        readonly spyLoyaltyThresholdValue: number;
        readonly spyPublicOrderThresholdValue: number;
        readonly publicOrderThresholdValue: number;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
    }
}
export default CampaignGroupCivilWarDefectionLoyaltyThresholds;
