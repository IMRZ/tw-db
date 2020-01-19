
import { CollectionCache, CollectionKey } from "../../../common";


export namespace RetinueSlotTypes {
  export const KEY = new CollectionKey("retinue_slot_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
    }
    
  }
}

export default RetinueSlotTypes;
