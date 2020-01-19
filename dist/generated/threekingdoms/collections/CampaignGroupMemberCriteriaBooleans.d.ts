import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CampaignGroupMemberCriteriaBooleanContexts } from "./CampaignGroupMemberCriteriaBooleanContexts";
export declare namespace CampaignGroupMemberCriteriaBooleans {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly value: boolean;
        readonly _context: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get context(): CampaignGroupMemberCriteriaBooleanContexts.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaBooleans;
