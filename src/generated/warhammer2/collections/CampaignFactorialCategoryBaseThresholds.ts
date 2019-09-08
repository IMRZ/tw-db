
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignFactorialCategoryJunctions } from "./CampaignFactorialCategoryJunctions";

export namespace CampaignFactorialCategoryBaseThresholds {
  export const KEY = new CollectionKey("campaign_factorial_category_base_thresholds");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _category: string;
    readonly baseThreshold: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._category = values["category"];
      this.baseThreshold = values["base_threshold"];
    }
    
    get category(): CampaignFactorialCategoryJunctions.Entry | undefined {
      const collection = <CampaignFactorialCategoryJunctions.Entry[]>this.collectionCache.getCollection(CampaignFactorialCategoryJunctions.KEY, CampaignFactorialCategoryJunctions.Entry);
      return collection.find(entry => entry.key === this._category);
    }
  }
}

export default CampaignFactorialCategoryBaseThresholds;
