import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CeoNodes } from "./CeoNodes";
import { CampaignGroupMemberCriteriaCeoNodeContexts } from "./CampaignGroupMemberCriteriaCeoNodeContexts";
export declare namespace CampaignGroupMemberCriteriaCeoNodes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _value: string;
        readonly _context: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get value(): CeoNodes.Entry | undefined;
        get context(): CampaignGroupMemberCriteriaCeoNodeContexts.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaCeoNodes;
