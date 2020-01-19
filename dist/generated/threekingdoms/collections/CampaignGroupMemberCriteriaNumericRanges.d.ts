import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CampaignGroupMemberCriteriaNumericRangeContexts } from "./CampaignGroupMemberCriteriaNumericRangeContexts";
export declare namespace CampaignGroupMemberCriteriaNumericRanges {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly minRange: number;
        readonly maxRange: number;
        readonly _context: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get context(): CampaignGroupMemberCriteriaNumericRangeContexts.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaNumericRanges;
