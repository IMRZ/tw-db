
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Languages {
  export const KEY = new CollectionKey("languages");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly fullName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.fullName = values["full_name"];
    }
    
  }
}

export default Languages;
