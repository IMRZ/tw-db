
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ResourceTransactionPooledResourceChangeContexts {
  export const KEY = new CollectionKey("resource_transaction_pooled_resource_change_contexts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly context: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.context = values["context"];
    }
    
  }
}

export default ResourceTransactionPooledResourceChangeContexts;
