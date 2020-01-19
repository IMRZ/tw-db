import { CollectionCache, CollectionKey } from "../../../common";
import { ResourceTransactions } from "./ResourceTransactions";
import { PooledResourceFactorJunctions } from "./PooledResourceFactorJunctions";
import { ResourceTransactionPooledResourceChangeContexts } from "./ResourceTransactionPooledResourceChangeContexts";
import { UiResourceTransactionPooledResourceJunctions } from "./UiResourceTransactionPooledResourceJunctions";
export declare namespace ResourceTransactionPooledResourceJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _resourceTransaction: string;
        readonly _pooledResourceFactor: string;
        readonly amount: number;
        readonly _context: string;
        readonly _uiResourceTransactionPooledResource: string;
        constructor(collectionCache: CollectionCache, values: any);
        get resourceTransaction(): ResourceTransactions.Entry | undefined;
        get pooledResourceFactor(): PooledResourceFactorJunctions.Entry | undefined;
        get context(): ResourceTransactionPooledResourceChangeContexts.Entry | undefined;
        get uiResourceTransactionPooledResource(): UiResourceTransactionPooledResourceJunctions.Entry | undefined;
    }
}
export default ResourceTransactionPooledResourceJunctions;
