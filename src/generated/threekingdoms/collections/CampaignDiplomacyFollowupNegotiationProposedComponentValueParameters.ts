
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyFollowupNegotiationProposedComponents } from "./CampaignDiplomacyFollowupNegotiationProposedComponents";

export namespace CampaignDiplomacyFollowupNegotiationProposedComponentValueParameters {
  export const KEY = new CollectionKey("campaign_diplomacy_followup_negotiation_proposed_component_value_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _component: string;
    readonly parameterIndex: number;
    readonly valueParameter: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._component = values["component"];
      this.parameterIndex = values["parameter_index"];
      this.valueParameter = values["value_parameter"];
    }
    
    get component(): CampaignDiplomacyFollowupNegotiationProposedComponents.Entry | undefined {
      const collection = <CampaignDiplomacyFollowupNegotiationProposedComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyFollowupNegotiationProposedComponents.KEY, CampaignDiplomacyFollowupNegotiationProposedComponents.Entry);
      return collection.find(entry => entry.id === this._component);
    }
  }
}

export default CampaignDiplomacyFollowupNegotiationProposedComponentValueParameters;
