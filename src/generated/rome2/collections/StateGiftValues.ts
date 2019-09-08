
import { CollectionCache, CollectionKey } from "../../../common";


export namespace StateGiftValues {
  export const KEY = new CollectionKey("state_gift_values");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly value: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.value = values["value"];
    }
    
  }
}

export default StateGiftValues;
