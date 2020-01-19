
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignPayloads {
  export const KEY = new CollectionKey("campaign_payloads");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignPayloads;
