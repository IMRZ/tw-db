
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignPayloadWeightedSets {
  export const KEY = new CollectionKey("campaign_payload_weighted_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignPayloadWeightedSets;
