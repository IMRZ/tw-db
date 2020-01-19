
import { CollectionCache, CollectionKey } from "../../../common";
import { ResourceTransactions } from "./ResourceTransactions";
import { PooledResourceFactorJunctions } from "./PooledResourceFactorJunctions";
import { ResourceTransactionPooledResourceChangeContexts } from "./ResourceTransactionPooledResourceChangeContexts";
import { UiResourceTransactionPooledResourceJunctions } from "./UiResourceTransactionPooledResourceJunctions";

export namespace ResourceTransactionPooledResourceJunctions {
  export const KEY = new CollectionKey("resource_transaction_pooled_resource_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _resourceTransaction: string;
    readonly _pooledResourceFactor: string;
    readonly amount: number;
    readonly _context: string;
    readonly _uiResourceTransactionPooledResource: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._resourceTransaction = values["resource_transaction"];
      this._pooledResourceFactor = values["pooled_resource_factor"];
      this.amount = values["amount"];
      this._context = values["context"];
      this._uiResourceTransactionPooledResource = values["ui_resource_transaction_pooled_resource"];
    }
    
    get resourceTransaction(): ResourceTransactions.Entry | undefined {
      const collection = <ResourceTransactions.Entry[]>this.collectionCache.getCollection(ResourceTransactions.KEY, ResourceTransactions.Entry);
      return collection.find(entry => entry.key === this._resourceTransaction);
    }
    
    get pooledResourceFactor(): PooledResourceFactorJunctions.Entry | undefined {
      const collection = <PooledResourceFactorJunctions.Entry[]>this.collectionCache.getCollection(PooledResourceFactorJunctions.KEY, PooledResourceFactorJunctions.Entry);
      return collection.find(entry => entry.key === this._pooledResourceFactor);
    }
    
    get context(): ResourceTransactionPooledResourceChangeContexts.Entry | undefined {
      const collection = <ResourceTransactionPooledResourceChangeContexts.Entry[]>this.collectionCache.getCollection(ResourceTransactionPooledResourceChangeContexts.KEY, ResourceTransactionPooledResourceChangeContexts.Entry);
      return collection.find(entry => entry.context === this._context);
    }
    
    get uiResourceTransactionPooledResource(): UiResourceTransactionPooledResourceJunctions.Entry | undefined {
      const collection = <UiResourceTransactionPooledResourceJunctions.Entry[]>this.collectionCache.getCollection(UiResourceTransactionPooledResourceJunctions.KEY, UiResourceTransactionPooledResourceJunctions.Entry);
      return collection.find(entry => entry.key === this._uiResourceTransactionPooledResource);
    }
  }
}

export default ResourceTransactionPooledResourceJunctions;
