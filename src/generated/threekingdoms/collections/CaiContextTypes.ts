
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiContextTypes {
  export const KEY = new CollectionKey("cai_context_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly contextTypeKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.contextTypeKey = values["context_type_key"];
    }
    
  }
}

export default CaiContextTypes;
