
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyMovementOptionSimpleDeals } from "./CampaignDiplomacyMovementOptionSimpleDeals";
import { CampaignDiplomacyVariables } from "./CampaignDiplomacyVariables";

export namespace CampaignDiplomacyMovementOptionSimpleDealVariableParameters {
  export const KEY = new CollectionKey("campaign_diplomacy_movement_option_simple_deal_variable_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _deal: string;
    readonly parameterIndex: number;
    readonly _variableParameter: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._deal = values["deal"];
      this.parameterIndex = values["parameter_index"];
      this._variableParameter = values["variable_parameter"];
    }
    
    get deal(): CampaignDiplomacyMovementOptionSimpleDeals.Entry | undefined {
      const collection = <CampaignDiplomacyMovementOptionSimpleDeals.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyMovementOptionSimpleDeals.KEY, CampaignDiplomacyMovementOptionSimpleDeals.Entry);
      return collection.find(entry => entry._movementOption === this._deal);
    }
    
    get variableParameter(): CampaignDiplomacyVariables.Entry | undefined {
      const collection = <CampaignDiplomacyVariables.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyVariables.KEY, CampaignDiplomacyVariables.Entry);
      return collection.find(entry => entry.key === this._variableParameter);
    }
  }
}

export default CampaignDiplomacyMovementOptionSimpleDealVariableParameters;
