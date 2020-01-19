import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { SettlementSiegeActionOptionSets } from "./SettlementSiegeActionOptionSets";
import { CampaignGroupMemberCriteriaSettlementSiegeActionOptionSetContexts } from "./CampaignGroupMemberCriteriaSettlementSiegeActionOptionSetContexts";
export declare namespace CampaignGroupMemberCriteriaSettlementSiegeActionOptionSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _settlementSiegeActionOptionSet: string;
        readonly _context: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get settlementSiegeActionOptionSet(): SettlementSiegeActionOptionSets.Entry | undefined;
        get context(): CampaignGroupMemberCriteriaSettlementSiegeActionOptionSetContexts.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaSettlementSiegeActionOptionSets;
