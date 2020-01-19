
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { Cultures } from "./Cultures";
import { CampaignGroupMemberCriteriaCultureContexts } from "./CampaignGroupMemberCriteriaCultureContexts";

export namespace CampaignGroupMemberCriteriaCultures {
  export const KEY = new CollectionKey("campaign_group_member_criteria_cultures");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _culture: string;
    readonly _context: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._culture = values["culture"];
      this._context = values["context"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
    
    get context(): CampaignGroupMemberCriteriaCultureContexts.Entry | undefined {
      const collection = <CampaignGroupMemberCriteriaCultureContexts.Entry[]>this.collectionCache.getCollection(CampaignGroupMemberCriteriaCultureContexts.KEY, CampaignGroupMemberCriteriaCultureContexts.Entry);
      return collection.find(entry => entry.context === this._context);
    }
  }
}

export default CampaignGroupMemberCriteriaCultures;
