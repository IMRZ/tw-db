
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Tristates {
  export const KEY = new CollectionKey("tristates");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default Tristates;
