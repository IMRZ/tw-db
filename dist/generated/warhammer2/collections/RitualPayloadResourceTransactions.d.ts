import { CollectionCache, CollectionKey } from "../../../common";
import { RitualPayloads } from "./RitualPayloads";
import { ResourceCosts } from "./ResourceCosts";
export declare namespace RitualPayloadResourceTransactions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _payload: string;
        readonly _transaction: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly payload: RitualPayloads.Entry | undefined;
        readonly transaction: ResourceCosts.Entry | undefined;
    }
}
export default RitualPayloadResourceTransactions;
