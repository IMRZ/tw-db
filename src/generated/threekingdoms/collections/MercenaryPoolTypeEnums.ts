
import { CollectionCache, CollectionKey } from "../../../common";


export namespace MercenaryPoolTypeEnums {
  export const KEY = new CollectionKey("mercenary_pool_type_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly poolType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.poolType = values["pool_type"];
    }
    
  }
}

export default MercenaryPoolTypeEnums;
