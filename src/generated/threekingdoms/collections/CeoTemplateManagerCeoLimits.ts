
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoTemplateManagers } from "./CeoTemplateManagers";
import { Ceos } from "./Ceos";
import { CeoNodes } from "./CeoNodes";
import { CeoCategories } from "./CeoCategories";

export namespace CeoTemplateManagerCeoLimits {
  export const KEY = new CollectionKey("ceo_template_manager_ceo_limits");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _templateManager: string;
    readonly scopedLimitOrLocalOnlyLimit: boolean;
    readonly _ceoToLimit: string;
    readonly _ceoNodeToLimit: string;
    readonly _ceoCategoryToLimit: string;
    readonly maxLimitThatCanExistAtOnce: number;
    readonly autoId: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._templateManager = values["template_manager"];
      this.scopedLimitOrLocalOnlyLimit = !!values["scoped_limit_or_local_only_limit"];
      this._ceoToLimit = values["ceo_to_limit"];
      this._ceoNodeToLimit = values["ceo_node_to_limit"];
      this._ceoCategoryToLimit = values["ceo_category_to_limit"];
      this.maxLimitThatCanExistAtOnce = values["max_limit_that_can_exist_at_once"];
      this.autoId = values["auto_id"];
    }
    
    get templateManager(): CeoTemplateManagers.Entry | undefined {
      const collection = <CeoTemplateManagers.Entry[]>this.collectionCache.getCollection(CeoTemplateManagers.KEY, CeoTemplateManagers.Entry);
      return collection.find(entry => entry.key === this._templateManager);
    }
    
    get ceoToLimit(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._ceoToLimit);
    }
    
    get ceoNodeToLimit(): CeoNodes.Entry | undefined {
      const collection = <CeoNodes.Entry[]>this.collectionCache.getCollection(CeoNodes.KEY, CeoNodes.Entry);
      return collection.find(entry => entry.key === this._ceoNodeToLimit);
    }
    
    get ceoCategoryToLimit(): CeoCategories.Entry | undefined {
      const collection = <CeoCategories.Entry[]>this.collectionCache.getCollection(CeoCategories.KEY, CeoCategories.Entry);
      return collection.find(entry => entry.key === this._ceoCategoryToLimit);
    }
  }
}

export default CeoTemplateManagerCeoLimits;
