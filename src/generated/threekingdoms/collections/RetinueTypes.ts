
import { CollectionCache, CollectionKey } from "../../../common";


export namespace RetinueTypes {
  export const KEY = new CollectionKey("retinue_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
    }
    
  }
}

export default RetinueTypes;
