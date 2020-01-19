
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { WorldPowerTokens } from "./WorldPowerTokens";
import { CampaignGroupMemberCriteriaWorldPowerTokenContexts } from "./CampaignGroupMemberCriteriaWorldPowerTokenContexts";

export namespace CampaignGroupMemberCriteriaWorldPowerTokens {
  export const KEY = new CollectionKey("campaign_group_member_criteria_world_power_tokens");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _token: string;
    readonly _context: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._token = values["token"];
      this._context = values["context"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get token(): WorldPowerTokens.Entry | undefined {
      const collection = <WorldPowerTokens.Entry[]>this.collectionCache.getCollection(WorldPowerTokens.KEY, WorldPowerTokens.Entry);
      return collection.find(entry => entry.id === this._token);
    }
    
    get context(): CampaignGroupMemberCriteriaWorldPowerTokenContexts.Entry | undefined {
      const collection = <CampaignGroupMemberCriteriaWorldPowerTokenContexts.Entry[]>this.collectionCache.getCollection(CampaignGroupMemberCriteriaWorldPowerTokenContexts.KEY, CampaignGroupMemberCriteriaWorldPowerTokenContexts.Entry);
      return collection.find(entry => entry.context === this._context);
    }
  }
}

export default CampaignGroupMemberCriteriaWorldPowerTokens;
