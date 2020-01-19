
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { CampaignGroupMemberCriteriaSubcultureContexts } from "./CampaignGroupMemberCriteriaSubcultureContexts";

export namespace CampaignGroupMemberCriteriaSubcultures {
  export const KEY = new CollectionKey("campaign_group_member_criteria_subcultures");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _subculture: string;
    readonly _context: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._subculture = values["subculture"];
      this._context = values["context"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
    
    get context(): CampaignGroupMemberCriteriaSubcultureContexts.Entry | undefined {
      const collection = <CampaignGroupMemberCriteriaSubcultureContexts.Entry[]>this.collectionCache.getCollection(CampaignGroupMemberCriteriaSubcultureContexts.KEY, CampaignGroupMemberCriteriaSubcultureContexts.Entry);
      return collection.find(entry => entry.context === this._context);
    }
  }
}

export default CampaignGroupMemberCriteriaSubcultures;
