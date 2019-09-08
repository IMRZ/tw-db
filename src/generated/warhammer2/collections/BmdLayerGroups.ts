
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BmdLayerGroups {
  export const KEY = new CollectionKey("bmd_layer_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default BmdLayerGroups;
