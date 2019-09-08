import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
export declare namespace CampaignGroupMemberCriteriaInvolvesSettlements {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly involvesSettlement: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly member: CampaignGroupMembers.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaInvolvesSettlements;
