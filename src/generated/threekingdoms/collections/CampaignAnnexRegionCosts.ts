
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { ResourceTransactions } from "./ResourceTransactions";

export namespace CampaignAnnexRegionCosts {
  export const KEY = new CollectionKey("campaign_annex_region_costs");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _group: string;
    readonly _resourceTransactionCost: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._group = values["group"];
      this._resourceTransactionCost = values["resource_transaction_cost"];
    }
    
    get group(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._group);
    }
    
    get resourceTransactionCost(): ResourceTransactions.Entry | undefined {
      const collection = <ResourceTransactions.Entry[]>this.collectionCache.getCollection(ResourceTransactions.KEY, ResourceTransactions.Entry);
      return collection.find(entry => entry.key === this._resourceTransactionCost);
    }
  }
}

export default CampaignAnnexRegionCosts;
