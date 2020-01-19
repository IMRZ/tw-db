import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
export declare namespace CampaignGroupMemberCriteriaNumericRanges {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly minRange: number;
        readonly maxRange: number;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaNumericRanges;
