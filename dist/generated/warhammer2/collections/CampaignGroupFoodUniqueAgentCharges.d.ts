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
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get uniqueAgent(): UniqueAgents.Entry | undefined;
    }
}
export default CampaignGroupFoodUniqueAgentCharges;
