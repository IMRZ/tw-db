
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignStances {
  export const KEY = new CollectionKey("campaign_stances");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignStances;
