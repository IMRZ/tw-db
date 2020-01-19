
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignStatisticsCategories {
  export const KEY = new CollectionKey("campaign_statistics_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedDescription: string;
    readonly categoryOrder: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedDescription = values["localised_description"];
      this.categoryOrder = values["category_order"];
    }
    
  }
}

export default CampaignStatisticsCategories;
