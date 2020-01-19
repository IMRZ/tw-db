
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CampaignDiplomacyTreatyComponentSets } from "./CampaignDiplomacyTreatyComponentSets";
import { CampaignGroupMemberCriteriaCampaignDiplomacyTreatyComponentSetContexts } from "./CampaignGroupMemberCriteriaCampaignDiplomacyTreatyComponentSetContexts";

export namespace CampaignGroupMemberCriteriaCampaignDiplomacyTreatyComponentSets {
  export const KEY = new CollectionKey("campaign_group_member_criteria_campaign_diplomacy_treaty_component_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _set: string;
    readonly _context: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._set = values["set"];
      this._context = values["context"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get set(): CampaignDiplomacyTreatyComponentSets.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponentSets.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponentSets.KEY, CampaignDiplomacyTreatyComponentSets.Entry);
      return collection.find(entry => entry.set === this._set);
    }
    
    get context(): CampaignGroupMemberCriteriaCampaignDiplomacyTreatyComponentSetContexts.Entry | undefined {
      const collection = <CampaignGroupMemberCriteriaCampaignDiplomacyTreatyComponentSetContexts.Entry[]>this.collectionCache.getCollection(CampaignGroupMemberCriteriaCampaignDiplomacyTreatyComponentSetContexts.KEY, CampaignGroupMemberCriteriaCampaignDiplomacyTreatyComponentSetContexts.Entry);
      return collection.find(entry => entry.context === this._context);
    }
  }
}

export default CampaignGroupMemberCriteriaCampaignDiplomacyTreatyComponentSets;
