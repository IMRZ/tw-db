
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignStatisticsTypes {
  export const KEY = new CollectionKey("campaign_statistics_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
      this.description = values["description"];
    }
    
  }
}

export default CampaignStatisticsTypes;
