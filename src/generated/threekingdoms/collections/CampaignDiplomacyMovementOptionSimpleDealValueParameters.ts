
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyMovementOptionSimpleDeals } from "./CampaignDiplomacyMovementOptionSimpleDeals";

export namespace CampaignDiplomacyMovementOptionSimpleDealValueParameters {
  export const KEY = new CollectionKey("campaign_diplomacy_movement_option_simple_deal_value_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _deal: string;
    readonly parameterIndex: number;
    readonly valueParameter: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._deal = values["deal"];
      this.parameterIndex = values["parameter_index"];
      this.valueParameter = values["value_parameter"];
    }
    
    get deal(): CampaignDiplomacyMovementOptionSimpleDeals.Entry | undefined {
      const collection = <CampaignDiplomacyMovementOptionSimpleDeals.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyMovementOptionSimpleDeals.KEY, CampaignDiplomacyMovementOptionSimpleDeals.Entry);
      return collection.find(entry => entry._movementOption === this._deal);
    }
  }
}

export default CampaignDiplomacyMovementOptionSimpleDealValueParameters;
