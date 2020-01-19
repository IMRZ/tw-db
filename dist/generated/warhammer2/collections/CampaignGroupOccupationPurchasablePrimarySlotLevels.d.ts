import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { ResourceCosts } from "./ResourceCosts";
export declare namespace CampaignGroupOccupationPurchasablePrimarySlotLevels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly level: number;
        readonly _resourceCost: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get resourceCost(): ResourceCosts.Entry | undefined;
    }
}
export default CampaignGroupOccupationPurchasablePrimarySlotLevels;
