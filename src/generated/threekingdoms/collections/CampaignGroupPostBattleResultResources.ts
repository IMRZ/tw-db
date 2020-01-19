
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { ResourceTransactions } from "./ResourceTransactions";
import { PooledResourceScopes } from "./PooledResourceScopes";

export namespace CampaignGroupPostBattleResultResources {
  export const KEY = new CollectionKey("campaign_group_post_battle_result_resources");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _resourceTransaction: string;
    readonly _resourceTransactionScope: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._resourceTransaction = values["resource_transaction"];
      this._resourceTransactionScope = values["resource_transaction_scope"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get resourceTransaction(): ResourceTransactions.Entry | undefined {
      const collection = <ResourceTransactions.Entry[]>this.collectionCache.getCollection(ResourceTransactions.KEY, ResourceTransactions.Entry);
      return collection.find(entry => entry.key === this._resourceTransaction);
    }
    
    get resourceTransactionScope(): PooledResourceScopes.Entry | undefined {
      const collection = <PooledResourceScopes.Entry[]>this.collectionCache.getCollection(PooledResourceScopes.KEY, PooledResourceScopes.Entry);
      return collection.find(entry => entry.key === this._resourceTransactionScope);
    }
  }
}

export default CampaignGroupPostBattleResultResources;
