
import { CollectionCache, CollectionKey } from "../../../common";
import { BmdLayerGroups } from "./BmdLayerGroups";

export namespace BmdExportTypes {
  export const KEY = new CollectionKey("bmd_export_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;
    readonly description: string;
    readonly _group: string;
    readonly default: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
      this.description = values["description"];
      this._group = values["group"];
      this.default = !!values["default"];
    }
    
    get group(): BmdLayerGroups.Entry | undefined {
      const collection = <BmdLayerGroups.Entry[]>this.collectionCache.getCollection(BmdLayerGroups.KEY, BmdLayerGroups.Entry);
      return collection.find(entry => entry.key === this._group);
    }
  }
}

export default BmdExportTypes;
