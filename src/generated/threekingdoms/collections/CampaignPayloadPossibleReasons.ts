
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignPayloadPossibleReasons {
  export const KEY = new CollectionKey("campaign_payload_possible_reasons");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly reason: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.reason = values["reason"];
    }
    
  }
}

export default CampaignPayloadPossibleReasons;
