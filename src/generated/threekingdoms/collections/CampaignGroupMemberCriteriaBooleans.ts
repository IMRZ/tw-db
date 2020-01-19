
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CampaignGroupMemberCriteriaBooleanContexts } from "./CampaignGroupMemberCriteriaBooleanContexts";

export namespace CampaignGroupMemberCriteriaBooleans {
  export const KEY = new CollectionKey("campaign_group_member_criteria_booleans");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly value: boolean;
    readonly _context: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this.value = !!values["value"];
      this._context = values["context"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get context(): CampaignGroupMemberCriteriaBooleanContexts.Entry | undefined {
      const collection = <CampaignGroupMemberCriteriaBooleanContexts.Entry[]>this.collectionCache.getCollection(CampaignGroupMemberCriteriaBooleanContexts.KEY, CampaignGroupMemberCriteriaBooleanContexts.Entry);
      return collection.find(entry => entry.context === this._context);
    }
  }
}

export default CampaignGroupMemberCriteriaBooleans;
