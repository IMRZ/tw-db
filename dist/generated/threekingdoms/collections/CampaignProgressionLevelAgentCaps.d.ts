import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignProgressionLevelDetails } from "./CampaignProgressionLevelDetails";
import { Agents } from "./Agents";
export declare namespace CampaignProgressionLevelAgentCaps {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignProgressionLevel: string;
        readonly _agent: string;
        readonly providedCap: number;
        readonly maximumCap: number;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignProgressionLevel(): CampaignProgressionLevelDetails.Entry | undefined;
        get agent(): Agents.Entry | undefined;
    }
}
export default CampaignProgressionLevelAgentCaps;
