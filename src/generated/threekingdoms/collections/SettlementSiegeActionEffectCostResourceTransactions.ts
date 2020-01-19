
import { CollectionCache, CollectionKey } from "../../../common";
import { SettlementSiegeActionEffectGroups } from "./SettlementSiegeActionEffectGroups";
import { ResourceTransactions } from "./ResourceTransactions";
import { PooledResourceScopes } from "./PooledResourceScopes";
import { SettlementSiegeActionEffectCostTargets } from "./SettlementSiegeActionEffectCostTargets";
import { SettlementSiegeActionEffectCostResourceTransactionConversions } from "./SettlementSiegeActionEffectCostResourceTransactionConversions";

export namespace SettlementSiegeActionEffectCostResourceTransactions {
  export const KEY = new CollectionKey("settlement_siege_action_effect_cost_resource_transactions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _effectGroup: string;
    readonly _requiredTransaction: string;
    readonly _requiredTransactionScope: string;
    readonly _requiredTransactionTarget: string;
    readonly _appliedTransaction: string;
    readonly _appliedTransactionScope: string;
    readonly _appliedTransactionTarget: string;
    readonly _appliedTransactionTreasuryConversion: string;
    readonly _appliedTransactionTreasuryConversionTarget: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._effectGroup = values["effect_group"];
      this._requiredTransaction = values["required_transaction"];
      this._requiredTransactionScope = values["required_transaction_scope"];
      this._requiredTransactionTarget = values["required_transaction_target"];
      this._appliedTransaction = values["applied_transaction"];
      this._appliedTransactionScope = values["applied_transaction_scope"];
      this._appliedTransactionTarget = values["applied_transaction_target"];
      this._appliedTransactionTreasuryConversion = values["applied_transaction_treasury_conversion"];
      this._appliedTransactionTreasuryConversionTarget = values["applied_transaction_treasury_conversion_target"];
    }
    
    get effectGroup(): SettlementSiegeActionEffectGroups.Entry | undefined {
      const collection = <SettlementSiegeActionEffectGroups.Entry[]>this.collectionCache.getCollection(SettlementSiegeActionEffectGroups.KEY, SettlementSiegeActionEffectGroups.Entry);
      return collection.find(entry => entry.effectGroup === this._effectGroup);
    }
    
    get requiredTransaction(): ResourceTransactions.Entry | undefined {
      const collection = <ResourceTransactions.Entry[]>this.collectionCache.getCollection(ResourceTransactions.KEY, ResourceTransactions.Entry);
      return collection.find(entry => entry.key === this._requiredTransaction);
    }
    
    get requiredTransactionScope(): PooledResourceScopes.Entry | undefined {
      const collection = <PooledResourceScopes.Entry[]>this.collectionCache.getCollection(PooledResourceScopes.KEY, PooledResourceScopes.Entry);
      return collection.find(entry => entry.key === this._requiredTransactionScope);
    }
    
    get requiredTransactionTarget(): SettlementSiegeActionEffectCostTargets.Entry | undefined {
      const collection = <SettlementSiegeActionEffectCostTargets.Entry[]>this.collectionCache.getCollection(SettlementSiegeActionEffectCostTargets.KEY, SettlementSiegeActionEffectCostTargets.Entry);
      return collection.find(entry => entry.target === this._requiredTransactionTarget);
    }
    
    get appliedTransaction(): ResourceTransactions.Entry | undefined {
      const collection = <ResourceTransactions.Entry[]>this.collectionCache.getCollection(ResourceTransactions.KEY, ResourceTransactions.Entry);
      return collection.find(entry => entry.key === this._appliedTransaction);
    }
    
    get appliedTransactionScope(): PooledResourceScopes.Entry | undefined {
      const collection = <PooledResourceScopes.Entry[]>this.collectionCache.getCollection(PooledResourceScopes.KEY, PooledResourceScopes.Entry);
      return collection.find(entry => entry.key === this._appliedTransactionScope);
    }
    
    get appliedTransactionTarget(): SettlementSiegeActionEffectCostTargets.Entry | undefined {
      const collection = <SettlementSiegeActionEffectCostTargets.Entry[]>this.collectionCache.getCollection(SettlementSiegeActionEffectCostTargets.KEY, SettlementSiegeActionEffectCostTargets.Entry);
      return collection.find(entry => entry.target === this._appliedTransactionTarget);
    }
    
    get appliedTransactionTreasuryConversion(): SettlementSiegeActionEffectCostResourceTransactionConversions.Entry | undefined {
      const collection = <SettlementSiegeActionEffectCostResourceTransactionConversions.Entry[]>this.collectionCache.getCollection(SettlementSiegeActionEffectCostResourceTransactionConversions.KEY, SettlementSiegeActionEffectCostResourceTransactionConversions.Entry);
      return collection.find(entry => entry.key === this._appliedTransactionTreasuryConversion);
    }
    
    get appliedTransactionTreasuryConversionTarget(): SettlementSiegeActionEffectCostTargets.Entry | undefined {
      const collection = <SettlementSiegeActionEffectCostTargets.Entry[]>this.collectionCache.getCollection(SettlementSiegeActionEffectCostTargets.KEY, SettlementSiegeActionEffectCostTargets.Entry);
      return collection.find(entry => entry.target === this._appliedTransactionTreasuryConversionTarget);
    }
  }
}

export default SettlementSiegeActionEffectCostResourceTransactions;
