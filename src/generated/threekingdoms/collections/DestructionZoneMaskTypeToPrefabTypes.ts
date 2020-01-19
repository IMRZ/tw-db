
import { CollectionCache, CollectionKey } from "../../../common";
import { DestructionZoneMaskTypes } from "./DestructionZoneMaskTypes";
import { PrefabTypes } from "./PrefabTypes";

export namespace DestructionZoneMaskTypeToPrefabTypes {
  export const KEY = new CollectionKey("destruction_zone_mask_type_to_prefab_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _destructionZoneMaskType: string;
    readonly _prefabType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._destructionZoneMaskType = values["destruction_zone_mask_type"];
      this._prefabType = values["prefab_type"];
    }
    
    get destructionZoneMaskType(): DestructionZoneMaskTypes.Entry | undefined {
      const collection = <DestructionZoneMaskTypes.Entry[]>this.collectionCache.getCollection(DestructionZoneMaskTypes.KEY, DestructionZoneMaskTypes.Entry);
      return collection.find(entry => entry.key === this._destructionZoneMaskType);
    }
    
    get prefabType(): PrefabTypes.Entry | undefined {
      const collection = <PrefabTypes.Entry[]>this.collectionCache.getCollection(PrefabTypes.KEY, PrefabTypes.Entry);
      return collection.find(entry => entry.prefabType === this._prefabType);
    }
  }
}

export default DestructionZoneMaskTypeToPrefabTypes;
