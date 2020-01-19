
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticSimpleDeals } from "./CampaignDiplomacyAutomaticSimpleDeals";
import { CampaignDiplomacyAllianceOaths } from "./CampaignDiplomacyAllianceOaths";

export namespace CampaignDiplomacyAutomaticSimpleDealAllianceOathParameters {
  export const KEY = new CollectionKey("campaign_diplomacy_automatic_simple_deal_alliance_oath_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _deal: string;
    readonly parameterIndex: number;
    readonly _allianceOathParameter: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._deal = values["deal"];
      this.parameterIndex = values["parameter_index"];
      this._allianceOathParameter = values["alliance_oath_parameter"];
    }
    
    get deal(): CampaignDiplomacyAutomaticSimpleDeals.Entry | undefined {
      const collection = <CampaignDiplomacyAutomaticSimpleDeals.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAutomaticSimpleDeals.KEY, CampaignDiplomacyAutomaticSimpleDeals.Entry);
      return collection.find(entry => entry._deal === this._deal);
    }
    
    get allianceOathParameter(): CampaignDiplomacyAllianceOaths.Entry | undefined {
      const collection = <CampaignDiplomacyAllianceOaths.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAllianceOaths.KEY, CampaignDiplomacyAllianceOaths.Entry);
      return collection.find(entry => entry.key === this._allianceOathParameter);
    }
  }
}

export default CampaignDiplomacyAutomaticSimpleDealAllianceOathParameters;
