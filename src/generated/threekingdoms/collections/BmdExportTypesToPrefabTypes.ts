
import { CollectionCache, CollectionKey } from "../../../common";
import { BmdExportTypesToPrefabTypeGroups } from "./BmdExportTypesToPrefabTypeGroups";
import { PrefabTypes } from "./PrefabTypes";
import { BmdExportTypesToPrefabTypeContexts } from "./BmdExportTypesToPrefabTypeContexts";

export namespace BmdExportTypesToPrefabTypes {
  export const KEY = new CollectionKey("bmd_export_types_to_prefab_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _group: string;
    readonly _prefabType: string;
    readonly _context: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._group = values["group"];
      this._prefabType = values["prefab_type"];
      this._context = values["context"];
    }
    
    get group(): BmdExportTypesToPrefabTypeGroups.Entry | undefined {
      const collection = <BmdExportTypesToPrefabTypeGroups.Entry[]>this.collectionCache.getCollection(BmdExportTypesToPrefabTypeGroups.KEY, BmdExportTypesToPrefabTypeGroups.Entry);
      return collection.find(entry => entry.group === this._group);
    }
    
    get prefabType(): PrefabTypes.Entry | undefined {
      const collection = <PrefabTypes.Entry[]>this.collectionCache.getCollection(PrefabTypes.KEY, PrefabTypes.Entry);
      return collection.find(entry => entry.prefabType === this._prefabType);
    }
    
    get context(): BmdExportTypesToPrefabTypeContexts.Entry | undefined {
      const collection = <BmdExportTypesToPrefabTypeContexts.Entry[]>this.collectionCache.getCollection(BmdExportTypesToPrefabTypeContexts.KEY, BmdExportTypesToPrefabTypeContexts.Entry);
      return collection.find(entry => entry.context === this._context);
    }
  }
}

export default BmdExportTypesToPrefabTypes;
