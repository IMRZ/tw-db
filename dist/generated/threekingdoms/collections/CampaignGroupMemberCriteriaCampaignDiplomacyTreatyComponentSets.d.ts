import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CampaignDiplomacyTreatyComponentSets } from "./CampaignDiplomacyTreatyComponentSets";
import { CampaignGroupMemberCriteriaCampaignDiplomacyTreatyComponentSetContexts } from "./CampaignGroupMemberCriteriaCampaignDiplomacyTreatyComponentSetContexts";
export declare namespace CampaignGroupMemberCriteriaCampaignDiplomacyTreatyComponentSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _set: string;
        readonly _context: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get set(): CampaignDiplomacyTreatyComponentSets.Entry | undefined;
        get context(): CampaignGroupMemberCriteriaCampaignDiplomacyTreatyComponentSetContexts.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaCampaignDiplomacyTreatyComponentSets;
