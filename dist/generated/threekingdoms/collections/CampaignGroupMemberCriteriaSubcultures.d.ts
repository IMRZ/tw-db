import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { CampaignGroupMemberCriteriaSubcultureContexts } from "./CampaignGroupMemberCriteriaSubcultureContexts";
export declare namespace CampaignGroupMemberCriteriaSubcultures {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _subculture: string;
        readonly _context: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get subculture(): CulturesSubcultures.Entry | undefined;
        get context(): CampaignGroupMemberCriteriaSubcultureContexts.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaSubcultures;
