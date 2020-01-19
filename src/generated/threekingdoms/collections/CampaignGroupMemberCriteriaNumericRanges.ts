
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CampaignGroupMemberCriteriaNumericRangeContexts } from "./CampaignGroupMemberCriteriaNumericRangeContexts";

export namespace CampaignGroupMemberCriteriaNumericRanges {
  export const KEY = new CollectionKey("campaign_group_member_criteria_numeric_ranges");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly minRange: number;
    readonly maxRange: number;
    readonly _context: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this.minRange = values["min_range"];
      this.maxRange = values["max_range"];
      this._context = values["context"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get context(): CampaignGroupMemberCriteriaNumericRangeContexts.Entry | undefined {
      const collection = <CampaignGroupMemberCriteriaNumericRangeContexts.Entry[]>this.collectionCache.getCollection(CampaignGroupMemberCriteriaNumericRangeContexts.KEY, CampaignGroupMemberCriteriaNumericRangeContexts.Entry);
      return collection.find(entry => entry.context === this._context);
    }
  }
}

export default CampaignGroupMemberCriteriaNumericRanges;
