
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiConstructionSystemTemplates {
  export const KEY = new CollectionKey("cai_construction_system_templates");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly defaultCategoryAndGroupValue: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.defaultCategoryAndGroupValue = values["default_category_and_group_value"];
    }
    
  }
}

export default CaiConstructionSystemTemplates;
