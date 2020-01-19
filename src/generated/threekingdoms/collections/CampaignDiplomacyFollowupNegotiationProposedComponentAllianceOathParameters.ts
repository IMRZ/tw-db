
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyFollowupNegotiationProposedComponents } from "./CampaignDiplomacyFollowupNegotiationProposedComponents";
import { CampaignDiplomacyAllianceOaths } from "./CampaignDiplomacyAllianceOaths";

export namespace CampaignDiplomacyFollowupNegotiationProposedComponentAllianceOathParameters {
  export const KEY = new CollectionKey("campaign_diplomacy_followup_negotiation_proposed_component_alliance_oath_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _component: string;
    readonly parameterIndex: number;
    readonly _allianceOathParameter: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._component = values["component"];
      this.parameterIndex = values["parameter_index"];
      this._allianceOathParameter = values["alliance_oath_parameter"];
    }
    
    get component(): CampaignDiplomacyFollowupNegotiationProposedComponents.Entry | undefined {
      const collection = <CampaignDiplomacyFollowupNegotiationProposedComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyFollowupNegotiationProposedComponents.KEY, CampaignDiplomacyFollowupNegotiationProposedComponents.Entry);
      return collection.find(entry => entry.id === this._component);
    }
    
    get allianceOathParameter(): CampaignDiplomacyAllianceOaths.Entry | undefined {
      const collection = <CampaignDiplomacyAllianceOaths.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAllianceOaths.KEY, CampaignDiplomacyAllianceOaths.Entry);
      return collection.find(entry => entry.key === this._allianceOathParameter);
    }
  }
}

export default CampaignDiplomacyFollowupNegotiationProposedComponentAllianceOathParameters;
