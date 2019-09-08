import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { AgentSubtypes } from "./AgentSubtypes";
export declare namespace CampaignGroupMemberCriteriaAgentSubtypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _agentSubtype: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly member: CampaignGroupMembers.Entry | undefined;
        readonly agentSubtype: AgentSubtypes.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaAgentSubtypes;
