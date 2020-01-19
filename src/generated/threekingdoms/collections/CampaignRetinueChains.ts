
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignRetinueChains {
  export const KEY = new CollectionKey("campaign_retinue_chains");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignRetinueChains;
