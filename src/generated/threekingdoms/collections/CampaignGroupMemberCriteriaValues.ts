
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";

export namespace CampaignGroupMemberCriteriaValues {
  export const KEY = new CollectionKey("campaign_group_member_criteria_values");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly value: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this.value = values["value"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
  }
}

export default CampaignGroupMemberCriteriaValues;
