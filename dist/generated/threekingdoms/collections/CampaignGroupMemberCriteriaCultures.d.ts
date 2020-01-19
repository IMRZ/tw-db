import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { Cultures } from "./Cultures";
import { CampaignGroupMemberCriteriaCultureContexts } from "./CampaignGroupMemberCriteriaCultureContexts";
export declare namespace CampaignGroupMemberCriteriaCultures {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _culture: string;
        readonly _context: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get culture(): Cultures.Entry | undefined;
        get context(): CampaignGroupMemberCriteriaCultureContexts.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaCultures;
