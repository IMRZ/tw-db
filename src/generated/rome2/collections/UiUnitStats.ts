
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiUnitStats {
  export const KEY = new CollectionKey("ui_unit_stats");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreenName: string;
    readonly maxValue: number;
    readonly campaignOnly: boolean;
    readonly sortOrder: number;
    readonly tooltipText: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreenName = values["onscreen_name"];
      this.maxValue = values["max_value"];
      this.campaignOnly = !!values["campaign_only"];
      this.sortOrder = values["sort_order"];
      this.tooltipText = values["tooltip_text"];
    }
    
  }
}

export default UiUnitStats;
