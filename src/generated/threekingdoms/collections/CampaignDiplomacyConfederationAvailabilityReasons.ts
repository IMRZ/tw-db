
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyAvailabilityReasons } from "./CampaignDiplomacyTreatyAvailabilityReasons";

export namespace CampaignDiplomacyConfederationAvailabilityReasons {
  export const KEY = new CollectionKey("campaign_diplomacy_confederation_availability_reasons");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly confederationReason: string;
    readonly _reason: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.confederationReason = values["confederation_reason"];
      this._reason = values["reason"];
    }
    
    get reason(): CampaignDiplomacyTreatyAvailabilityReasons.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyAvailabilityReasons.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyAvailabilityReasons.KEY, CampaignDiplomacyTreatyAvailabilityReasons.Entry);
      return collection.find(entry => entry.key === this._reason);
    }
  }
}

export default CampaignDiplomacyConfederationAvailabilityReasons;
