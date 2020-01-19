import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { Ceos } from "./Ceos";
import { CampaignGroupMemberCriteriaCeoContexts } from "./CampaignGroupMemberCriteriaCeoContexts";
export declare namespace CampaignGroupMemberCriteriaCeos {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _value: string;
        readonly _context: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get value(): Ceos.Entry | undefined;
        get context(): CampaignGroupMemberCriteriaCeoContexts.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaCeos;
