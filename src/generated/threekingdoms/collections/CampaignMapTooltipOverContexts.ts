
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignMapTooltipOverContexts {
  export const KEY = new CollectionKey("campaign_map_tooltip_over_contexts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly overContexts: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.overContexts = values["over_contexts"];
    }
    
  }
}

export default CampaignMapTooltipOverContexts;
