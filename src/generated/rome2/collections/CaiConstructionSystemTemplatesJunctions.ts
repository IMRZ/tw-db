
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiConstructionSystemTemplates } from "./CaiConstructionSystemTemplates";
import { CaiConstructionSystemCategories } from "./CaiConstructionSystemCategories";
import { CaiConstructionSystemCategoryGroups } from "./CaiConstructionSystemCategoryGroups";

export namespace CaiConstructionSystemTemplatesJunctions {
  export const KEY = new CollectionKey("cai_construction_system_templates_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _caiConstructionSystemTemplate: string;
    readonly _caiConstructionSystemCategory: string;
    readonly _caiConstructionSystemCategoryGroup: string;
    readonly value: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._caiConstructionSystemTemplate = values["cai_construction_system_template"];
      this._caiConstructionSystemCategory = values["cai_construction_system_category"];
      this._caiConstructionSystemCategoryGroup = values["cai_construction_system_category_group"];
      this.value = values["value"];
    }
    
    get caiConstructionSystemTemplate(): CaiConstructionSystemTemplates.Entry | undefined {
      const collection = <CaiConstructionSystemTemplates.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemTemplates.KEY, CaiConstructionSystemTemplates.Entry);
      return collection.find(entry => entry.key === this._caiConstructionSystemTemplate);
    }
    
    get caiConstructionSystemCategory(): CaiConstructionSystemCategories.Entry | undefined {
      const collection = <CaiConstructionSystemCategories.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemCategories.KEY, CaiConstructionSystemCategories.Entry);
      return collection.find(entry => entry.key === this._caiConstructionSystemCategory);
    }
    
    get caiConstructionSystemCategoryGroup(): CaiConstructionSystemCategoryGroups.Entry | undefined {
      const collection = <CaiConstructionSystemCategoryGroups.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemCategoryGroups.KEY, CaiConstructionSystemCategoryGroups.Entry);
      return collection.find(entry => entry.key === this._caiConstructionSystemCategoryGroup);
    }
  }
}

export default CaiConstructionSystemTemplatesJunctions;
