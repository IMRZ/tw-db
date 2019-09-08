
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignFactorialCategoryJunctions } from "./CampaignFactorialCategoryJunctions";
import { CampaignFactorialUiInfos } from "./CampaignFactorialUiInfos";

export namespace FactorialEffects {
  export const KEY = new CollectionKey("factorial_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _category: string;
    readonly _uiInfos: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._category = values["category"];
      this._uiInfos = values["ui_infos"];
    }
    
    get category(): CampaignFactorialCategoryJunctions.Entry | undefined {
      const collection = <CampaignFactorialCategoryJunctions.Entry[]>this.collectionCache.getCollection(CampaignFactorialCategoryJunctions.KEY, CampaignFactorialCategoryJunctions.Entry);
      return collection.find(entry => entry.key === this._category);
    }
    
    get uiInfos(): CampaignFactorialUiInfos.Entry | undefined {
      const collection = <CampaignFactorialUiInfos.Entry[]>this.collectionCache.getCollection(CampaignFactorialUiInfos.KEY, CampaignFactorialUiInfos.Entry);
      return collection.find(entry => entry.key === this._uiInfos);
    }
  }
}

export default FactorialEffects;
