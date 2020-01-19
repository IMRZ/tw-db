
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { Seasons } from "./Seasons";

export namespace CampaignGroupMemberCriteriaSeasons {
  export const KEY = new CollectionKey("campaign_group_member_criteria_seasons");

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
    
    get value(): Seasons.Entry | undefined {
      const collection = <Seasons.Entry[]>this.collectionCache.getCollection(Seasons.KEY, Seasons.Entry);
      return collection.find(entry => entry.season === this._value);
    }
  }
}

export default CampaignGroupMemberCriteriaSeasons;
