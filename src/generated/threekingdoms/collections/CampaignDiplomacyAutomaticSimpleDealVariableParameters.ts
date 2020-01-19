
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticSimpleDeals } from "./CampaignDiplomacyAutomaticSimpleDeals";
import { CampaignDiplomacyFilterSources } from "./CampaignDiplomacyFilterSources";

export namespace CampaignDiplomacyAutomaticSimpleDealVariableParameters {
  export const KEY = new CollectionKey("campaign_diplomacy_automatic_simple_deal_variable_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _deal: string;
    readonly parameterIndex: string;
    readonly _variableParameter: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._deal = values["deal"];
      this.parameterIndex = values["parameter_index"];
      this._variableParameter = values["variable_parameter"];
    }
    
    get deal(): CampaignDiplomacyAutomaticSimpleDeals.Entry | undefined {
      const collection = <CampaignDiplomacyAutomaticSimpleDeals.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAutomaticSimpleDeals.KEY, CampaignDiplomacyAutomaticSimpleDeals.Entry);
      return collection.find(entry => entry._deal === this._deal);
    }
    
    get variableParameter(): CampaignDiplomacyFilterSources.Entry | undefined {
      const collection = <CampaignDiplomacyFilterSources.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyFilterSources.KEY, CampaignDiplomacyFilterSources.Entry);
      return collection.find(entry => entry.key === this._variableParameter);
    }
  }
}

export default CampaignDiplomacyAutomaticSimpleDealVariableParameters;
