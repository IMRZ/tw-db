
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CcpBalanceValues {
  export const KEY = new CollectionKey("ccp_balance_values");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly value: number;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.value = values["value"];
      this.description = values["description"];
    }
    
  }
}

export default CcpBalanceValues;
