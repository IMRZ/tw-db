
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignMapTooltipStatuses {
  export const KEY = new CollectionKey("campaign_map_tooltip_statuses");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly status: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.status = values["status"];
    }
    
  }
}

export default CampaignMapTooltipStatuses;
