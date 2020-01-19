
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignPayloadSetParameters {
  export const KEY = new CollectionKey("campaign_payload_set_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignPayloadSetParameters;
