
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { MinisterialPositions } from "./MinisterialPositions";

export namespace CampaignGroupMemberCriteriaMinisterialPositions {
  export const KEY = new CollectionKey("campaign_group_member_criteria_ministerial_positions");

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
    
    get value(): MinisterialPositions.Entry | undefined {
      const collection = <MinisterialPositions.Entry[]>this.collectionCache.getCollection(MinisterialPositions.KEY, MinisterialPositions.Entry);
      return collection.find(entry => entry.ministerKey === this._value);
    }
  }
}

export default CampaignGroupMemberCriteriaMinisterialPositions;
