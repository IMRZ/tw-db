import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloads } from "./CampaignPayloads";
import { ResourceTransactions } from "./ResourceTransactions";
import { PooledResourceScopes } from "./PooledResourceScopes";
export declare namespace CampaignPayloadResourceTransactions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _payload: string;
        readonly _resourceTransaction: string;
        readonly _scope: string;
        constructor(collectionCache: CollectionCache, values: any);
        get payload(): CampaignPayloads.Entry | undefined;
        get resourceTransaction(): ResourceTransactions.Entry | undefined;
        get scope(): PooledResourceScopes.Entry | undefined;
    }
}
export default CampaignPayloadResourceTransactions;
