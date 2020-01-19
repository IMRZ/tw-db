import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
export declare namespace CampaignGroupCharacterDefectionLoyaltyThresholds {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly mainLoyaltyThresholdValue: number;
        readonly spouseLoyaltyThresholdValue: number;
        readonly childLoyaltyThresholdValue: number;
        readonly mainLoyaltyLowWarningThreshold: number;
        readonly governorRetireLoyaltyThreshold: number;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
    }
}
export default CampaignGroupCharacterDefectionLoyaltyThresholds;
