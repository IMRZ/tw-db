import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { SettlementClimateTypes } from "./SettlementClimateTypes";
export declare namespace CampaignGroupMemberCriteriaClimates {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _climate: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly member: CampaignGroupMembers.Entry | undefined;
        readonly climate: SettlementClimateTypes.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaClimates;
