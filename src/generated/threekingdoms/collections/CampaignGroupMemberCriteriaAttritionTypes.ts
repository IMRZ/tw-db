
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CampaignMapAttritions } from "./CampaignMapAttritions";

export namespace CampaignGroupMemberCriteriaAttritionTypes {
  export const KEY = new CollectionKey("campaign_group_member_criteria_attrition_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _attritionType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._attritionType = values["attrition_type"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get attritionType(): CampaignMapAttritions.Entry | undefined {
      const collection = <CampaignMapAttritions.Entry[]>this.collectionCache.getCollection(CampaignMapAttritions.KEY, CampaignMapAttritions.Entry);
      return collection.find(entry => entry.key === this._attritionType);
    }
  }
}

export default CampaignGroupMemberCriteriaAttritionTypes;
