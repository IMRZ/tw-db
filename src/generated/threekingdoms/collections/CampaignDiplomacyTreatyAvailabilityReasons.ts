
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignDiplomacyTreatyAvailabilityReasons {
  export const KEY = new CollectionKey("campaign_diplomacy_treaty_availability_reasons");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly description: string;
    readonly priority: number;
    readonly hideInUi: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.description = values["description"];
      this.priority = values["priority"];
      this.hideInUi = !!values["hide_in_ui"];
    }
    
  }
}

export default CampaignDiplomacyTreatyAvailabilityReasons;
