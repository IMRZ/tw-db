
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticComplexDealComponents } from "./CampaignDiplomacyAutomaticComplexDealComponents";
import { CampaignDiplomacyAutomaticDeals } from "./CampaignDiplomacyAutomaticDeals";

export namespace CampaignDiplomacyAutomaticComplexDealComponentDealParameters {
  export const KEY = new CollectionKey("campaign_diplomacy_automatic_complex_deal_component_deal_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _component: string;
    readonly parameterIndex: number;
    readonly _dealParameter: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._component = values["component"];
      this.parameterIndex = values["parameter_index"];
      this._dealParameter = values["deal_parameter"];
    }
    
    get component(): CampaignDiplomacyAutomaticComplexDealComponents.Entry | undefined {
      const collection = <CampaignDiplomacyAutomaticComplexDealComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAutomaticComplexDealComponents.KEY, CampaignDiplomacyAutomaticComplexDealComponents.Entry);
      return collection.find(entry => entry.id === this._component);
    }
    
    get dealParameter(): CampaignDiplomacyAutomaticDeals.Entry | undefined {
      const collection = <CampaignDiplomacyAutomaticDeals.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAutomaticDeals.KEY, CampaignDiplomacyAutomaticDeals.Entry);
      return collection.find(entry => entry.id === this._dealParameter);
    }
  }
}

export default CampaignDiplomacyAutomaticComplexDealComponentDealParameters;
