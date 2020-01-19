
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CampaignDiplomacyFollowupNegotiations } from "./CampaignDiplomacyFollowupNegotiations";

export namespace CampaignDiplomacyTreatyComponentFollowupNegotiations {
  export const KEY = new CollectionKey("campaign_diplomacy_treaty_component_followup_negotiations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _treatyComponent: string;
    readonly _followupNegotiation: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._treatyComponent = values["treaty_component"];
      this._followupNegotiation = values["followup_negotiation"];
    }
    
    get treatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._treatyComponent);
    }
    
    get followupNegotiation(): CampaignDiplomacyFollowupNegotiations.Entry | undefined {
      const collection = <CampaignDiplomacyFollowupNegotiations.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyFollowupNegotiations.KEY, CampaignDiplomacyFollowupNegotiations.Entry);
      return collection.find(entry => entry.id === this._followupNegotiation);
    }
  }
}

export default CampaignDiplomacyTreatyComponentFollowupNegotiations;
