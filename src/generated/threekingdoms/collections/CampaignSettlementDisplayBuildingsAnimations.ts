
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignSettlementDisplayBuildingsAnimations {
  export const KEY = new CollectionKey("campaign_settlement_display_buildings_animations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly time: number;
    readonly delay: number;
    readonly translationYStart: number;
    readonly translationYEnd: number;
    readonly timeDeviation: number;
    readonly delayDeviation: number;
    readonly alphaStart: number;
    readonly alphaEnd: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.time = values["time"];
      this.delay = values["delay"];
      this.translationYStart = values["translation_y_start"];
      this.translationYEnd = values["translation_y_end"];
      this.timeDeviation = values["time_deviation"];
      this.delayDeviation = values["delay_deviation"];
      this.alphaStart = values["alpha_start"];
      this.alphaEnd = values["alpha_end"];
    }
    
  }
}

export default CampaignSettlementDisplayBuildingsAnimations;
