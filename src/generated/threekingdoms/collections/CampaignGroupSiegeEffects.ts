
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { EffectBundles } from "./EffectBundles";
import { ResourceTransactions } from "./ResourceTransactions";
import { PooledResourceScopes } from "./PooledResourceScopes";

export namespace CampaignGroupSiegeEffects {
  export const KEY = new CollectionKey("campaign_group_siege_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _effectBundle: string;
    readonly _roundResourceTransaction: string;
    readonly _roundResourceTransactionScope: string;
    readonly roundResourceTransactionPreventsAttrition: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._effectBundle = values["effect_bundle"];
      this._roundResourceTransaction = values["round_resource_transaction"];
      this._roundResourceTransactionScope = values["round_resource_transaction_scope"];
      this.roundResourceTransactionPreventsAttrition = !!values["round_resource_transaction_prevents_attrition"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
    
    get roundResourceTransaction(): ResourceTransactions.Entry | undefined {
      const collection = <ResourceTransactions.Entry[]>this.collectionCache.getCollection(ResourceTransactions.KEY, ResourceTransactions.Entry);
      return collection.find(entry => entry.key === this._roundResourceTransaction);
    }
    
    get roundResourceTransactionScope(): PooledResourceScopes.Entry | undefined {
      const collection = <PooledResourceScopes.Entry[]>this.collectionCache.getCollection(PooledResourceScopes.KEY, PooledResourceScopes.Entry);
      return collection.find(entry => entry.key === this._roundResourceTransactionScope);
    }
  }
}

export default CampaignGroupSiegeEffects;
