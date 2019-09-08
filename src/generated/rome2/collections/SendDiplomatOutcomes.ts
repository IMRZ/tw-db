
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SendDiplomatOutcomes {
  export const KEY = new CollectionKey("send_diplomat_outcomes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default SendDiplomatOutcomes;
