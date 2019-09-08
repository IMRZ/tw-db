
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TradeNodeGroups {
  export const KEY = new CollectionKey("trade_node_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly displayName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.displayName = values["display_name"];
    }
    
  }
}

export default TradeNodeGroups;
