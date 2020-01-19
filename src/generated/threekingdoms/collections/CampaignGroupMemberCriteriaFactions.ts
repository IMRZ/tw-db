
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { Factions } from "./Factions";
import { CampaignGroupMemberCriteriaFactionContexts } from "./CampaignGroupMemberCriteriaFactionContexts";

export namespace CampaignGroupMemberCriteriaFactions {
  export const KEY = new CollectionKey("campaign_group_member_criteria_factions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _faction: string;
    readonly _context: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._faction = values["faction"];
      this._context = values["context"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get context(): CampaignGroupMemberCriteriaFactionContexts.Entry | undefined {
      const collection = <CampaignGroupMemberCriteriaFactionContexts.Entry[]>this.collectionCache.getCollection(CampaignGroupMemberCriteriaFactionContexts.KEY, CampaignGroupMemberCriteriaFactionContexts.Entry);
      return collection.find(entry => entry.context === this._context);
    }
  }
}

export default CampaignGroupMemberCriteriaFactions;
