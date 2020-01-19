
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyFollowupNegotiationProposedComponents } from "./CampaignDiplomacyFollowupNegotiationProposedComponents";
import { CampaignDiplomacyVariables } from "./CampaignDiplomacyVariables";

export namespace CampaignDiplomacyFollowupNegotiationProposedComponentVariableParameters {
  export const KEY = new CollectionKey("campaign_diplomacy_followup_negotiation_proposed_component_variable_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _component: string;
    readonly parameterIndex: number;
    readonly _variableParameter: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._component = values["component"];
      this.parameterIndex = values["parameter_index"];
      this._variableParameter = values["variable_parameter"];
    }
    
    get component(): CampaignDiplomacyFollowupNegotiationProposedComponents.Entry | undefined {
      const collection = <CampaignDiplomacyFollowupNegotiationProposedComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyFollowupNegotiationProposedComponents.KEY, CampaignDiplomacyFollowupNegotiationProposedComponents.Entry);
      return collection.find(entry => entry.id === this._component);
    }
    
    get variableParameter(): CampaignDiplomacyVariables.Entry | undefined {
      const collection = <CampaignDiplomacyVariables.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyVariables.KEY, CampaignDiplomacyVariables.Entry);
      return collection.find(entry => entry.key === this._variableParameter);
    }
  }
}

export default CampaignDiplomacyFollowupNegotiationProposedComponentVariableParameters;
