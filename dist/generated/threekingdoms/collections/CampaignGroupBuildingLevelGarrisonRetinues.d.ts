import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CampaignRetinueChains } from "./CampaignRetinueChains";
export declare namespace CampaignGroupBuildingLevelGarrisonRetinues {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _retinueChain: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get retinueChain(): CampaignRetinueChains.Entry | undefined;
    }
}
export default CampaignGroupBuildingLevelGarrisonRetinues;
