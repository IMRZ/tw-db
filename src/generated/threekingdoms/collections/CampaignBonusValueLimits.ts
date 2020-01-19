
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBonusValueCategories } from "./CampaignBonusValueCategories";

export namespace CampaignBonusValueLimits {
  export const KEY = new CollectionKey("campaign_bonus_value_limits");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _category: string;
    readonly id: string;
    readonly minValue: number;
    readonly maxValue: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._category = values["category"];
      this.id = values["id"];
      this.minValue = values["min_value"];
      this.maxValue = values["max_value"];
    }
    
    get category(): CampaignBonusValueCategories.Entry | undefined {
      const collection = <CampaignBonusValueCategories.Entry[]>this.collectionCache.getCollection(CampaignBonusValueCategories.KEY, CampaignBonusValueCategories.Entry);
      return collection.find(entry => entry.key === this._category);
    }
  }
}

export default CampaignBonusValueLimits;
