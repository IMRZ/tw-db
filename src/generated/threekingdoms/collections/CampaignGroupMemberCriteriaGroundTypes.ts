
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CampaignGroundTypes } from "./CampaignGroundTypes";

export namespace CampaignGroupMemberCriteriaGroundTypes {
  export const KEY = new CollectionKey("campaign_group_member_criteria_ground_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _value: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._value = values["value"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get value(): CampaignGroundTypes.Entry | undefined {
      const collection = <CampaignGroundTypes.Entry[]>this.collectionCache.getCollection(CampaignGroundTypes.KEY, CampaignGroundTypes.Entry);
      return collection.find(entry => entry.type === this._value);
    }
  }
}

export default CampaignGroupMemberCriteriaGroundTypes;
