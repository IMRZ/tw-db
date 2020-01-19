
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BmdExportTypesToPrefabTypeCriteriaTypes {
  export const KEY = new CollectionKey("bmd_export_types_to_prefab_type_criteria_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly criteria: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.criteria = values["criteria"];
    }
    
  }
}

export default BmdExportTypesToPrefabTypeCriteriaTypes;
