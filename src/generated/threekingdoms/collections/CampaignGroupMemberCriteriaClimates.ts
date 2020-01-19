
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { Climates } from "./Climates";

export namespace CampaignGroupMemberCriteriaClimates {
  export const KEY = new CollectionKey("campaign_group_member_criteria_climates");

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
    
    get value(): Climates.Entry | undefined {
      const collection = <Climates.Entry[]>this.collectionCache.getCollection(Climates.KEY, Climates.Entry);
      return collection.find(entry => entry.climateType === this._value);
    }
  }
}

export default CampaignGroupMemberCriteriaClimates;
