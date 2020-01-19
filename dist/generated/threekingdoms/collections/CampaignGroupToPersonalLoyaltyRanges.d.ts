import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
export declare namespace CampaignGroupToPersonalLoyaltyRanges {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly min: number;
        readonly max: number;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
    }
}
export default CampaignGroupToPersonalLoyaltyRanges;
