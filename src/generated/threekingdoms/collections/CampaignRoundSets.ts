
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignRoundSets {
  export const KEY = new CollectionKey("campaign_round_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignRoundSets;
