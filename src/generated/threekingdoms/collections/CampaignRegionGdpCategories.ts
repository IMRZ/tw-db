
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignRegionGdpCategories {
  export const KEY = new CollectionKey("campaign_region_gdp_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly category: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.category = values["category"];
    }
    
  }
}

export default CampaignRegionGdpCategories;
