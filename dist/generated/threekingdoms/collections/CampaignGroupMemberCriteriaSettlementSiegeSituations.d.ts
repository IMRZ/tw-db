import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { SettlementSiegeSituations } from "./SettlementSiegeSituations";
import { CampaignGroupMemberCriteriaSettlementSiegeSituationContexts } from "./CampaignGroupMemberCriteriaSettlementSiegeSituationContexts";
export declare namespace CampaignGroupMemberCriteriaSettlementSiegeSituations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _settlementSiegeSituation: string;
        readonly _context: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get settlementSiegeSituation(): SettlementSiegeSituations.Entry | undefined;
        get context(): CampaignGroupMemberCriteriaSettlementSiegeSituationContexts.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaSettlementSiegeSituations;
