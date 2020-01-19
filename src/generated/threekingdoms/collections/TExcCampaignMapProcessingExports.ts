
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TExcCampaignMapProcessingExports {
  export const KEY = new CollectionKey("TExc_campaign_map_processing_exports");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly tableName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.tableName = values["table_name"];
    }
    
  }
}

export default TExcCampaignMapProcessingExports;
