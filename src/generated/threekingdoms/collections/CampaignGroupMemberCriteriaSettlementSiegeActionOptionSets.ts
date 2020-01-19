
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { SettlementSiegeActionOptionSets } from "./SettlementSiegeActionOptionSets";
import { CampaignGroupMemberCriteriaSettlementSiegeActionOptionSetContexts } from "./CampaignGroupMemberCriteriaSettlementSiegeActionOptionSetContexts";

export namespace CampaignGroupMemberCriteriaSettlementSiegeActionOptionSets {
  export const KEY = new CollectionKey("campaign_group_member_criteria_settlement_siege_action_option_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _settlementSiegeActionOptionSet: string;
    readonly _context: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._settlementSiegeActionOptionSet = values["settlement_siege_action_option_set"];
      this._context = values["context"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get settlementSiegeActionOptionSet(): SettlementSiegeActionOptionSets.Entry | undefined {
      const collection = <SettlementSiegeActionOptionSets.Entry[]>this.collectionCache.getCollection(SettlementSiegeActionOptionSets.KEY, SettlementSiegeActionOptionSets.Entry);
      return collection.find(entry => entry.set === this._settlementSiegeActionOptionSet);
    }
    
    get context(): CampaignGroupMemberCriteriaSettlementSiegeActionOptionSetContexts.Entry | undefined {
      const collection = <CampaignGroupMemberCriteriaSettlementSiegeActionOptionSetContexts.Entry[]>this.collectionCache.getCollection(CampaignGroupMemberCriteriaSettlementSiegeActionOptionSetContexts.KEY, CampaignGroupMemberCriteriaSettlementSiegeActionOptionSetContexts.Entry);
      return collection.find(entry => entry.context === this._context);
    }
  }
}

export default CampaignGroupMemberCriteriaSettlementSiegeActionOptionSets;
