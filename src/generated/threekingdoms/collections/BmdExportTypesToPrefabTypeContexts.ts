
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BmdExportTypesToPrefabTypeContexts {
  export const KEY = new CollectionKey("bmd_export_types_to_prefab_type_contexts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly context: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.context = values["context"];
    }
    
  }
}

export default BmdExportTypesToPrefabTypeContexts;
