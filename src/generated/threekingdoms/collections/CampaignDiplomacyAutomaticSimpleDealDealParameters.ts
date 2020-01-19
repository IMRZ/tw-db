
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticSimpleDeals } from "./CampaignDiplomacyAutomaticSimpleDeals";
import { CampaignDiplomacyAutomaticDeals } from "./CampaignDiplomacyAutomaticDeals";

export namespace CampaignDiplomacyAutomaticSimpleDealDealParameters {
  export const KEY = new CollectionKey("campaign_diplomacy_automatic_simple_deal_deal_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _deal: string;
    readonly parameterIndex: number;
    readonly _dealParameter: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._deal = values["deal"];
      this.parameterIndex = values["parameter_index"];
      this._dealParameter = values["deal_parameter"];
    }
    
    get deal(): CampaignDiplomacyAutomaticSimpleDeals.Entry | undefined {
      const collection = <CampaignDiplomacyAutomaticSimpleDeals.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAutomaticSimpleDeals.KEY, CampaignDiplomacyAutomaticSimpleDeals.Entry);
      return collection.find(entry => entry._deal === this._deal);
    }
    
    get dealParameter(): CampaignDiplomacyAutomaticDeals.Entry | undefined {
      const collection = <CampaignDiplomacyAutomaticDeals.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAutomaticDeals.KEY, CampaignDiplomacyAutomaticDeals.Entry);
      return collection.find(entry => entry.id === this._dealParameter);
    }
  }
}

export default CampaignDiplomacyAutomaticSimpleDealDealParameters;
