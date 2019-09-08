
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";

export namespace CampaignGroupMemberCriteriaNumericRanges {
  export const KEY = new CollectionKey("campaign_group_member_criteria_numeric_ranges");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly minRange: number;
    readonly maxRange: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this.minRange = values["min_range"];
      this.maxRange = values["max_range"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
  }
}

export default CampaignGroupMemberCriteriaNumericRanges;
