
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignFactorialUiInfos {
  export const KEY = new CollectionKey("campaign_factorial_ui_infos");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly positiveName: string;
    readonly negativeName: string;
    readonly icon: string;
    readonly negativeIcon: string;
    readonly effectText: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.positiveName = values["positive_name"];
      this.negativeName = values["negative_name"];
      this.icon = values["icon"];
      this.negativeIcon = values["negative_icon"];
      this.effectText = values["effect_text"];
    }
    
  }
}

export default CampaignFactorialUiInfos;
