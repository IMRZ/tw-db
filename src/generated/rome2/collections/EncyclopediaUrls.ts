
import { CollectionCache, CollectionKey } from "../../../common";


export namespace EncyclopediaUrls {
  export const KEY = new CollectionKey("encyclopedia_urls");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;
    readonly url: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
      this.url = values["url"];
    }
    
  }
}

export default EncyclopediaUrls;
