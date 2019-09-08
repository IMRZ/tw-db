
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignMapTooltipTexts {
  export const KEY = new CollectionKey("campaign_map_tooltip_texts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly tooltipText: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.tooltipText = values["tooltip_text"];
    }
    
  }
}

export default CampaignMapTooltipTexts;
