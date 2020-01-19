
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { ResourceTransactions } from "./ResourceTransactions";
import { PooledResourceScopes } from "./PooledResourceScopes";
import { CampaignDiplomacyTreatyAvailabilityReasons } from "./CampaignDiplomacyTreatyAvailabilityReasons";

export namespace CampaignDiplomacyTreatyComponentResourceTransactions {
  export const KEY = new CollectionKey("campaign_diplomacy_treaty_component_resource_transactions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _treatyComponent: string;
    readonly _resourceTransaction: string;
    readonly _pooledResourceScope: string;
    readonly recurring: boolean;
    readonly appliedToProposer: boolean;
    readonly _reasonIfUnavailable: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._treatyComponent = values["treaty_component"];
      this._resourceTransaction = values["resource_transaction"];
      this._pooledResourceScope = values["pooled_resource_scope"];
      this.recurring = !!values["recurring"];
      this.appliedToProposer = !!values["applied_to_proposer"];
      this._reasonIfUnavailable = values["reason_if_unavailable"];
    }
    
    get treatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._treatyComponent);
    }
    
    get resourceTransaction(): ResourceTransactions.Entry | undefined {
      const collection = <ResourceTransactions.Entry[]>this.collectionCache.getCollection(ResourceTransactions.KEY, ResourceTransactions.Entry);
      return collection.find(entry => entry.key === this._resourceTransaction);
    }
    
    get pooledResourceScope(): PooledResourceScopes.Entry | undefined {
      const collection = <PooledResourceScopes.Entry[]>this.collectionCache.getCollection(PooledResourceScopes.KEY, PooledResourceScopes.Entry);
      return collection.find(entry => entry.key === this._pooledResourceScope);
    }
    
    get reasonIfUnavailable(): CampaignDiplomacyTreatyAvailabilityReasons.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyAvailabilityReasons.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyAvailabilityReasons.KEY, CampaignDiplomacyTreatyAvailabilityReasons.Entry);
      return collection.find(entry => entry.key === this._reasonIfUnavailable);
    }
  }
}

export default CampaignDiplomacyTreatyComponentResourceTransactions;
