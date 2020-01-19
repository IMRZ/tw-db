
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignPayloadLoyaltyScopes {
  export const KEY = new CollectionKey("campaign_payload_loyalty_scopes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default CampaignPayloadLoyaltyScopes;
