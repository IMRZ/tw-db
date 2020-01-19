
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Tristates {
  export const KEY = new CollectionKey("tristates");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default Tristates;
