
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignDiplomacyPoolAvailableLimitTypes {
  export const KEY = new CollectionKey("campaign_diplomacy_pool_available_limit_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
    }
    
  }
}

export default CampaignDiplomacyPoolAvailableLimitTypes;
