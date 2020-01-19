
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { SettlementSiegeSituations } from "./SettlementSiegeSituations";
import { CampaignGroupMemberCriteriaSettlementSiegeSituationContexts } from "./CampaignGroupMemberCriteriaSettlementSiegeSituationContexts";

export namespace CampaignGroupMemberCriteriaSettlementSiegeSituations {
  export const KEY = new CollectionKey("campaign_group_member_criteria_settlement_siege_situations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _settlementSiegeSituation: string;
    readonly _context: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._settlementSiegeSituation = values["settlement_siege_situation"];
      this._context = values["context"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get settlementSiegeSituation(): SettlementSiegeSituations.Entry | undefined {
      const collection = <SettlementSiegeSituations.Entry[]>this.collectionCache.getCollection(SettlementSiegeSituations.KEY, SettlementSiegeSituations.Entry);
      return collection.find(entry => entry.situation === this._settlementSiegeSituation);
    }
    
    get context(): CampaignGroupMemberCriteriaSettlementSiegeSituationContexts.Entry | undefined {
      const collection = <CampaignGroupMemberCriteriaSettlementSiegeSituationContexts.Entry[]>this.collectionCache.getCollection(CampaignGroupMemberCriteriaSettlementSiegeSituationContexts.KEY, CampaignGroupMemberCriteriaSettlementSiegeSituationContexts.Entry);
      return collection.find(entry => entry.context === this._context);
    }
  }
}

export default CampaignGroupMemberCriteriaSettlementSiegeSituations;
