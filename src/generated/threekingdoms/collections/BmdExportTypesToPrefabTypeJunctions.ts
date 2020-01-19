
import { CollectionCache, CollectionKey } from "../../../common";
import { BmdExportTypesToPrefabTypeGroups } from "./BmdExportTypesToPrefabTypeGroups";
import { BmdExportTypes } from "./BmdExportTypes";
import { BmdExportTypesToPrefabTypeCriteriaTypes } from "./BmdExportTypesToPrefabTypeCriteriaTypes";

export namespace BmdExportTypesToPrefabTypeJunctions {
  export const KEY = new CollectionKey("bmd_export_types_to_prefab_type_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _group: string;
    readonly _bmdExportType: string;
    readonly _criteria: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._group = values["group"];
      this._bmdExportType = values["bmd_export_type"];
      this._criteria = values["criteria"];
    }
    
    get group(): BmdExportTypesToPrefabTypeGroups.Entry | undefined {
      const collection = <BmdExportTypesToPrefabTypeGroups.Entry[]>this.collectionCache.getCollection(BmdExportTypesToPrefabTypeGroups.KEY, BmdExportTypesToPrefabTypeGroups.Entry);
      return collection.find(entry => entry.group === this._group);
    }
    
    get bmdExportType(): BmdExportTypes.Entry | undefined {
      const collection = <BmdExportTypes.Entry[]>this.collectionCache.getCollection(BmdExportTypes.KEY, BmdExportTypes.Entry);
      return collection.find(entry => entry.name === this._bmdExportType);
    }
    
    get criteria(): BmdExportTypesToPrefabTypeCriteriaTypes.Entry | undefined {
      const collection = <BmdExportTypesToPrefabTypeCriteriaTypes.Entry[]>this.collectionCache.getCollection(BmdExportTypesToPrefabTypeCriteriaTypes.KEY, BmdExportTypesToPrefabTypeCriteriaTypes.Entry);
      return collection.find(entry => entry.criteria === this._criteria);
    }
  }
}

export default BmdExportTypesToPrefabTypeJunctions;
