
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CulturePackIds {
  export const KEY = new CollectionKey("culture_pack_ids");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default CulturePackIds;
