import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { PooledResources } from "./PooledResources";
export declare namespace CampaignGroupCraftingInfos {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _uniqueResource: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly campaignGroup: CampaignGroups.Entry | undefined;
        readonly uniqueResource: PooledResources.Entry | undefined;
    }
}
export default CampaignGroupCraftingInfos;
