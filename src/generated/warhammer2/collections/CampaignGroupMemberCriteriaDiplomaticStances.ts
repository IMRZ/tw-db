
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { Stances } from "./Stances";

export namespace CampaignGroupMemberCriteriaDiplomaticStances {
  export const KEY = new CollectionKey("campaign_group_member_criteria_diplomatic_stances");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _stance: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._stance = values["stance"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get stance(): Stances.Entry | undefined {
      const collection = <Stances.Entry[]>this.collectionCache.getCollection(Stances.KEY, Stances.Entry);
      return collection.find(entry => entry.key === this._stance);
    }
  }
}

export default CampaignGroupMemberCriteriaDiplomaticStances;
