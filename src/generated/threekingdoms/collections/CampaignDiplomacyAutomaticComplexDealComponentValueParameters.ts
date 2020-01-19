
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticComplexDealComponents } from "./CampaignDiplomacyAutomaticComplexDealComponents";

export namespace CampaignDiplomacyAutomaticComplexDealComponentValueParameters {
  export const KEY = new CollectionKey("campaign_diplomacy_automatic_complex_deal_component_value_parameters");

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
    
    get component(): CampaignDiplomacyAutomaticComplexDealComponents.Entry | undefined {
      const collection = <CampaignDiplomacyAutomaticComplexDealComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAutomaticComplexDealComponents.KEY, CampaignDiplomacyAutomaticComplexDealComponents.Entry);
      return collection.find(entry => entry.id === this._component);
    }
  }
}

export default CampaignDiplomacyAutomaticComplexDealComponentValueParameters;
