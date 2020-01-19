
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyAvailabilityReasons } from "./CampaignDiplomacyTreatyAvailabilityReasons";

export namespace CampaignDiplomacyTreatyRequirements {
  export const KEY = new CollectionKey("campaign_diplomacy_treaty_requirements");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _reason: string;
    readonly proposerRequiresAvailableTradeRouteSlot: boolean;
    readonly recipientRequiresAvailableTradeRouteSlot: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._reason = values["reason"];
      this.proposerRequiresAvailableTradeRouteSlot = !!values["proposer_requires_available_trade_route_slot"];
      this.recipientRequiresAvailableTradeRouteSlot = !!values["recipient_requires_available_trade_route_slot"];
    }
    
    get reason(): CampaignDiplomacyTreatyAvailabilityReasons.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyAvailabilityReasons.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyAvailabilityReasons.KEY, CampaignDiplomacyTreatyAvailabilityReasons.Entry);
      return collection.find(entry => entry.key === this._reason);
    }
  }
}

export default CampaignDiplomacyTreatyRequirements;
