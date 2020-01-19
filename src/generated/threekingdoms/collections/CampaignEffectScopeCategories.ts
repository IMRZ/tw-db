
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignEffectScopeCategories {
  export const KEY = new CollectionKey("campaign_effect_scope_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly nameLocalised: string;
    readonly sortOrder: number;
    readonly categoryIcon: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.nameLocalised = values["name_localised"];
      this.sortOrder = values["sort_order"];
      this.categoryIcon = values["category_icon"];
    }
    
  }
}

export default CampaignEffectScopeCategories;
