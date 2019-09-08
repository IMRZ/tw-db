
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { Genders } from "./Genders";

export namespace CampaignGroupMemberCriteriaActorGenders {
  export const KEY = new CollectionKey("campaign_group_member_criteria_actor_genders");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _gender: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._gender = values["gender"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get gender(): Genders.Entry | undefined {
      const collection = <Genders.Entry[]>this.collectionCache.getCollection(Genders.KEY, Genders.Entry);
      return collection.find(entry => entry.gender === this._gender);
    }
  }
}

export default CampaignGroupMemberCriteriaActorGenders;
