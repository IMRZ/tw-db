import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { Agents } from "./Agents";
export declare namespace CampaignGroupMemberCriteriaAgentTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _agentType: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly member: CampaignGroupMembers.Entry | undefined;
        readonly agentType: Agents.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaAgentTypes;
