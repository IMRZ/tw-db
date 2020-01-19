import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { Agents } from "./Agents";
export declare namespace CampaignGroupMemberCriteriaAgentTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _value: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get value(): Agents.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaAgentTypes;
