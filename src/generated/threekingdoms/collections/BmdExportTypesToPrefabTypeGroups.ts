
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BmdExportTypesToPrefabTypeGroups {
  export const KEY = new CollectionKey("bmd_export_types_to_prefab_type_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly group: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.group = values["group"];
    }
    
  }
}

export default BmdExportTypesToPrefabTypeGroups;
