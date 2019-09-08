
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignFactorialCategories } from "./CampaignFactorialCategories";
import { CampaignDesignControlledFactorialCategories } from "./CampaignDesignControlledFactorialCategories";

export namespace CampaignFactorialCategoryJunctions {
  export const KEY = new CollectionKey("campaign_factorial_category_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _codeCategory: string;
    readonly _designControlledCategory: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._codeCategory = values["code_category"];
      this._designControlledCategory = values["design_controlled_category"];
    }
    
    get codeCategory(): CampaignFactorialCategories.Entry | undefined {
      const collection = <CampaignFactorialCategories.Entry[]>this.collectionCache.getCollection(CampaignFactorialCategories.KEY, CampaignFactorialCategories.Entry);
      return collection.find(entry => entry.key === this._codeCategory);
    }
    
    get designControlledCategory(): CampaignDesignControlledFactorialCategories.Entry | undefined {
      const collection = <CampaignDesignControlledFactorialCategories.Entry[]>this.collectionCache.getCollection(CampaignDesignControlledFactorialCategories.KEY, CampaignDesignControlledFactorialCategories.Entry);
      return collection.find(entry => entry.key === this._designControlledCategory);
    }
  }
}

export default CampaignFactorialCategoryJunctions;
