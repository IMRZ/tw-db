import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { UniqueAgents } from "./UniqueAgents";
export declare namespace CampaignGroupFoodUniqueAgentCharges {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _uniqueAgent: string;
        readonly charges: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly campaignGroup: CampaignGroups.Entry | undefined;
        readonly uniqueAgent: UniqueAgents.Entry | undefined;
    }
}
export default CampaignGroupFoodUniqueAgentCharges;
