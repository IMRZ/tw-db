
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { Ceos } from "./Ceos";
import { CampaignGroupMemberCriteriaCeoContexts } from "./CampaignGroupMemberCriteriaCeoContexts";

export namespace CampaignGroupMemberCriteriaCeos {
  export const KEY = new CollectionKey("campaign_group_member_criteria_ceos");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _value: string;
    readonly _context: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._value = values["value"];
      this._context = values["context"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get value(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._value);
    }
    
    get context(): CampaignGroupMemberCriteriaCeoContexts.Entry | undefined {
      const collection = <CampaignGroupMemberCriteriaCeoContexts.Entry[]>this.collectionCache.getCollection(CampaignGroupMemberCriteriaCeoContexts.KEY, CampaignGroupMemberCriteriaCeoContexts.Entry);
      return collection.find(entry => entry.context === this._context);
    }
  }
}

export default CampaignGroupMemberCriteriaCeos;
