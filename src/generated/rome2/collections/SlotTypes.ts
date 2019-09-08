
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SlotTypes {
  export const KEY = new CollectionKey("slot_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly canDestroy: boolean;
    readonly canConvert: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.canDestroy = !!values["can_destroy"];
      this.canConvert = !!values["can_convert"];
    }
    
  }
}

export default SlotTypes;
