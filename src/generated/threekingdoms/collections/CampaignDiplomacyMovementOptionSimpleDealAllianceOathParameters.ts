
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyMovementOptionSimpleDeals } from "./CampaignDiplomacyMovementOptionSimpleDeals";
import { CampaignDiplomacyAllianceOaths } from "./CampaignDiplomacyAllianceOaths";

export namespace CampaignDiplomacyMovementOptionSimpleDealAllianceOathParameters {
  export const KEY = new CollectionKey("campaign_diplomacy_movement_option_simple_deal_alliance_oath_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _deal: string;
    readonly parameterIndex: number;
    readonly _allianceOath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._deal = values["deal"];
      this.parameterIndex = values["parameter_index"];
      this._allianceOath = values["alliance_oath"];
    }
    
    get deal(): CampaignDiplomacyMovementOptionSimpleDeals.Entry | undefined {
      const collection = <CampaignDiplomacyMovementOptionSimpleDeals.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyMovementOptionSimpleDeals.KEY, CampaignDiplomacyMovementOptionSimpleDeals.Entry);
      return collection.find(entry => entry._movementOption === this._deal);
    }
    
    get allianceOath(): CampaignDiplomacyAllianceOaths.Entry | undefined {
      const collection = <CampaignDiplomacyAllianceOaths.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAllianceOaths.KEY, CampaignDiplomacyAllianceOaths.Entry);
      return collection.find(entry => entry.key === this._allianceOath);
    }
  }
}

export default CampaignDiplomacyMovementOptionSimpleDealAllianceOathParameters;
