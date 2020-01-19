
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticComplexDealComponents } from "./CampaignDiplomacyAutomaticComplexDealComponents";
import { CampaignDiplomacyFilterSources } from "./CampaignDiplomacyFilterSources";

export namespace CampaignDiplomacyAutomaticComplexDealComponentVariableParameters {
  export const KEY = new CollectionKey("campaign_diplomacy_automatic_complex_deal_component_variable_parameters");

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
    
    get component(): CampaignDiplomacyAutomaticComplexDealComponents.Entry | undefined {
      const collection = <CampaignDiplomacyAutomaticComplexDealComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAutomaticComplexDealComponents.KEY, CampaignDiplomacyAutomaticComplexDealComponents.Entry);
      return collection.find(entry => entry.id === this._component);
    }
    
    get variableParameter(): CampaignDiplomacyFilterSources.Entry | undefined {
      const collection = <CampaignDiplomacyFilterSources.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyFilterSources.KEY, CampaignDiplomacyFilterSources.Entry);
      return collection.find(entry => entry.key === this._variableParameter);
    }
  }
}

export default CampaignDiplomacyAutomaticComplexDealComponentVariableParameters;
