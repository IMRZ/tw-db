
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CampaignProgressionLevelDetails } from "./CampaignProgressionLevelDetails";
import { CampaignGroupMemberCriteriaProgressionLevelContexts } from "./CampaignGroupMemberCriteriaProgressionLevelContexts";

export namespace CampaignGroupMemberCriteriaProgressionLevels {
  export const KEY = new CollectionKey("campaign_group_member_criteria_progression_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _progressionLevel: string;
    readonly _context: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._progressionLevel = values["progression_level"];
      this._context = values["context"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get progressionLevel(): CampaignProgressionLevelDetails.Entry | undefined {
      const collection = <CampaignProgressionLevelDetails.Entry[]>this.collectionCache.getCollection(CampaignProgressionLevelDetails.KEY, CampaignProgressionLevelDetails.Entry);
      return collection.find(entry => entry.key === this._progressionLevel);
    }
    
    get context(): CampaignGroupMemberCriteriaProgressionLevelContexts.Entry | undefined {
      const collection = <CampaignGroupMemberCriteriaProgressionLevelContexts.Entry[]>this.collectionCache.getCollection(CampaignGroupMemberCriteriaProgressionLevelContexts.KEY, CampaignGroupMemberCriteriaProgressionLevelContexts.Entry);
      return collection.find(entry => entry.context === this._context);
    }
  }
}

export default CampaignGroupMemberCriteriaProgressionLevels;
