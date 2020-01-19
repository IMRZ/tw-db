
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoTemplateManagers } from "./CeoTemplateManagers";
import { CeoCategories } from "./CeoCategories";

export namespace CeoTemplateManagerSupportedCategories {
  export const KEY = new CollectionKey("ceo_template_manager_supported_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _templateManagerKey: string;
    readonly _supportedCategory: string;
    readonly canSpawnCeos: boolean;
    readonly canOwnCeos: boolean;
    readonly autoId: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._templateManagerKey = values["template_manager_key"];
      this._supportedCategory = values["supported_category"];
      this.canSpawnCeos = !!values["can_spawn_ceos"];
      this.canOwnCeos = !!values["can_own_ceos"];
      this.autoId = values["auto_id"];
    }
    
    get templateManagerKey(): CeoTemplateManagers.Entry | undefined {
      const collection = <CeoTemplateManagers.Entry[]>this.collectionCache.getCollection(CeoTemplateManagers.KEY, CeoTemplateManagers.Entry);
      return collection.find(entry => entry.key === this._templateManagerKey);
    }
    
    get supportedCategory(): CeoCategories.Entry | undefined {
      const collection = <CeoCategories.Entry[]>this.collectionCache.getCollection(CeoCategories.KEY, CeoCategories.Entry);
      return collection.find(entry => entry.key === this._supportedCategory);
    }
  }
}

export default CeoTemplateManagerSupportedCategories;
