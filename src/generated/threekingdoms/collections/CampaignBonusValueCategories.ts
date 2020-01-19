
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignBonusValueCategories {
  export const KEY = new CollectionKey("campaign_bonus_value_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignBonusValueCategories;
