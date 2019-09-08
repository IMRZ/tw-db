
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";

export namespace CampaignGroupMemberCriteriaInvolvesSettlements {
  export const KEY = new CollectionKey("campaign_group_member_criteria_involves_settlements");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly involvesSettlement: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this.involvesSettlement = !!values["involves_settlement"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
  }
}

export default CampaignGroupMemberCriteriaInvolvesSettlements;
