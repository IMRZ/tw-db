
import { CollectionCache, CollectionKey } from "../../../common";


export namespace NameTypes {
  export const KEY = new CollectionKey("name_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default NameTypes;
