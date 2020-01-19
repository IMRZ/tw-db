
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CeoNodes } from "./CeoNodes";
import { CampaignGroupMemberCriteriaCeoNodeContexts } from "./CampaignGroupMemberCriteriaCeoNodeContexts";

export namespace CampaignGroupMemberCriteriaCeoNodes {
  export const KEY = new CollectionKey("campaign_group_member_criteria_ceo_nodes");

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
    
    get value(): CeoNodes.Entry | undefined {
      const collection = <CeoNodes.Entry[]>this.collectionCache.getCollection(CeoNodes.KEY, CeoNodes.Entry);
      return collection.find(entry => entry.key === this._value);
    }
    
    get context(): CampaignGroupMemberCriteriaCeoNodeContexts.Entry | undefined {
      const collection = <CampaignGroupMemberCriteriaCeoNodeContexts.Entry[]>this.collectionCache.getCollection(CampaignGroupMemberCriteriaCeoNodeContexts.KEY, CampaignGroupMemberCriteriaCeoNodeContexts.Entry);
      return collection.find(entry => entry.context === this._context);
    }
  }
}

export default CampaignGroupMemberCriteriaCeoNodes;
