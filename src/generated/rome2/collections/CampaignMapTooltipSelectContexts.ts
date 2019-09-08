
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignMapTooltipSelectContexts {
  export const KEY = new CollectionKey("campaign_map_tooltip_select_contexts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly selectContext: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.selectContext = values["select_context"];
    }
    
  }
}

export default CampaignMapTooltipSelectContexts;
