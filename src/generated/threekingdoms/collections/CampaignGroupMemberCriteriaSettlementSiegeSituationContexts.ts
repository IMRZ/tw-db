
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignGroupMemberCriteriaSettlementSiegeSituationContexts {
  export const KEY = new CollectionKey("campaign_group_member_criteria_settlement_siege_situation_contexts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly context: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.context = values["context"];
    }
    
  }
}

export default CampaignGroupMemberCriteriaSettlementSiegeSituationContexts;
