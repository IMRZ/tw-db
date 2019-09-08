
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SettlementOccupationOptions {
  export const KEY = new CollectionKey("settlement_occupation_options");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly sortOrder: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.sortOrder = values["sort_order"];
    }
    
  }
}

export default SettlementOccupationOptions;
