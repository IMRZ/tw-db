
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TradeNodeGroups {
  export const KEY = new CollectionKey("trade_node_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default TradeNodeGroups;
