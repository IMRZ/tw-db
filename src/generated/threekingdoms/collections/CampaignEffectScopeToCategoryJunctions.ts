
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
import { CampaignEffectScopeCategories } from "./CampaignEffectScopeCategories";

export namespace CampaignEffectScopeToCategoryJunctions {
  export const KEY = new CollectionKey("campaign_effect_scope_to_category_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _scope: string;
    readonly _category: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._scope = values["scope"];
      this._category = values["category"];
    }
    
    get scope(): CampaignEffectScopes.Entry | undefined {
      const collection = <CampaignEffectScopes.Entry[]>this.collectionCache.getCollection(CampaignEffectScopes.KEY, CampaignEffectScopes.Entry);
      return collection.find(entry => entry.key === this._scope);
    }
    
    get category(): CampaignEffectScopeCategories.Entry | undefined {
      const collection = <CampaignEffectScopeCategories.Entry[]>this.collectionCache.getCollection(CampaignEffectScopeCategories.KEY, CampaignEffectScopeCategories.Entry);
      return collection.find(entry => entry.key === this._category);
    }
  }
}

export default CampaignEffectScopeToCategoryJunctions;
