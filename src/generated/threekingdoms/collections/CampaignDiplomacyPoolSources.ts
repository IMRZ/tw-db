
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignDiplomacyPoolSources {
  export const KEY = new CollectionKey("campaign_diplomacy_pool_sources");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignDiplomacyPoolSources;
