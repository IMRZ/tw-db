
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloads } from "./CampaignPayloads";
import { ResourceTransactions } from "./ResourceTransactions";
import { PooledResourceScopes } from "./PooledResourceScopes";

export namespace CampaignPayloadResourceTransactions {
  export const KEY = new CollectionKey("campaign_payload_resource_transactions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _payload: string;
    readonly _resourceTransaction: string;
    readonly _scope: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._payload = values["payload"];
      this._resourceTransaction = values["resource_transaction"];
      this._scope = values["scope"];
    }
    
    get payload(): CampaignPayloads.Entry | undefined {
      const collection = <CampaignPayloads.Entry[]>this.collectionCache.getCollection(CampaignPayloads.KEY, CampaignPayloads.Entry);
      return collection.find(entry => entry.key === this._payload);
    }
    
    get resourceTransaction(): ResourceTransactions.Entry | undefined {
      const collection = <ResourceTransactions.Entry[]>this.collectionCache.getCollection(ResourceTransactions.KEY, ResourceTransactions.Entry);
      return collection.find(entry => entry.key === this._resourceTransaction);
    }
    
    get scope(): PooledResourceScopes.Entry | undefined {
      const collection = <PooledResourceScopes.Entry[]>this.collectionCache.getCollection(PooledResourceScopes.KEY, PooledResourceScopes.Entry);
      return collection.find(entry => entry.key === this._scope);
    }
  }
}

export default CampaignPayloadResourceTransactions;
