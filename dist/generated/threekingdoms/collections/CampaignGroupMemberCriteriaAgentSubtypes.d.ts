import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { AgentSubtypes } from "./AgentSubtypes";
export declare namespace CampaignGroupMemberCriteriaAgentSubtypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _value: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get value(): AgentSubtypes.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaAgentSubtypes;
