
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyFollowupNegotiations } from "./CampaignDiplomacyFollowupNegotiations";
import { CampaignDiplomacyGroups } from "./CampaignDiplomacyGroups";

export namespace CampaignDiplomacyFollowupNegotiationRequirements {
  export const KEY = new CollectionKey("campaign_diplomacy_followup_negotiation_requirements");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _followupNegotiation: string;
    readonly _requirement: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._followupNegotiation = values["followup_negotiation"];
      this._requirement = values["requirement"];
    }
    
    get followupNegotiation(): CampaignDiplomacyFollowupNegotiations.Entry | undefined {
      const collection = <CampaignDiplomacyFollowupNegotiations.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyFollowupNegotiations.KEY, CampaignDiplomacyFollowupNegotiations.Entry);
      return collection.find(entry => entry.id === this._followupNegotiation);
    }
    
    get requirement(): CampaignDiplomacyGroups.Entry | undefined {
      const collection = <CampaignDiplomacyGroups.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyGroups.KEY, CampaignDiplomacyGroups.Entry);
      return collection.find(entry => entry.key === this._requirement);
    }
  }
}

export default CampaignDiplomacyFollowupNegotiationRequirements;
