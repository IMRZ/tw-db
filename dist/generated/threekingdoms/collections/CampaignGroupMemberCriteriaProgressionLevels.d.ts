import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CampaignProgressionLevelDetails } from "./CampaignProgressionLevelDetails";
import { CampaignGroupMemberCriteriaProgressionLevelContexts } from "./CampaignGroupMemberCriteriaProgressionLevelContexts";
export declare namespace CampaignGroupMemberCriteriaProgressionLevels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _progressionLevel: string;
        readonly _context: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get progressionLevel(): CampaignProgressionLevelDetails.Entry | undefined;
        get context(): CampaignGroupMemberCriteriaProgressionLevelContexts.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaProgressionLevels;
