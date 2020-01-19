
import { CollectionCache, CollectionKey } from "../../../common";
import { SettlementSiegeActionEffectCostResourceTransactionConversions } from "./SettlementSiegeActionEffectCostResourceTransactionConversions";
import { PooledResourceFactors } from "./PooledResourceFactors";
import { PooledResourceScopes } from "./PooledResourceScopes";
import { PooledResources } from "./PooledResources";
import { UiResourceTransactionPooledResourceJunctions } from "./UiResourceTransactionPooledResourceJunctions";

export namespace SettlementSiegeActionEffectCostResourceTransactionConversionFactors {
  export const KEY = new CollectionKey("settlement_siege_action_effect_cost_resource_transaction_conversion_factors");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _conversion: string;
    readonly _fromFactor: string;
    readonly _toFactor: string;
    readonly rate: number;
    readonly _scope: string;
    readonly _toResource: string;
    readonly _uiTransactionInfo: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._conversion = values["conversion"];
      this._fromFactor = values["from_factor"];
      this._toFactor = values["to_factor"];
      this.rate = values["rate"];
      this._scope = values["scope"];
      this._toResource = values["to_resource"];
      this._uiTransactionInfo = values["ui_transaction_info"];
    }
    
    get conversion(): SettlementSiegeActionEffectCostResourceTransactionConversions.Entry | undefined {
      const collection = <SettlementSiegeActionEffectCostResourceTransactionConversions.Entry[]>this.collectionCache.getCollection(SettlementSiegeActionEffectCostResourceTransactionConversions.KEY, SettlementSiegeActionEffectCostResourceTransactionConversions.Entry);
      return collection.find(entry => entry.key === this._conversion);
    }
    
    get fromFactor(): PooledResourceFactors.Entry | undefined {
      const collection = <PooledResourceFactors.Entry[]>this.collectionCache.getCollection(PooledResourceFactors.KEY, PooledResourceFactors.Entry);
      return collection.find(entry => entry.key === this._fromFactor);
    }
    
    get toFactor(): PooledResourceFactors.Entry | undefined {
      const collection = <PooledResourceFactors.Entry[]>this.collectionCache.getCollection(PooledResourceFactors.KEY, PooledResourceFactors.Entry);
      return collection.find(entry => entry.key === this._toFactor);
    }
    
    get scope(): PooledResourceScopes.Entry | undefined {
      const collection = <PooledResourceScopes.Entry[]>this.collectionCache.getCollection(PooledResourceScopes.KEY, PooledResourceScopes.Entry);
      return collection.find(entry => entry.key === this._scope);
    }
    
    get toResource(): PooledResources.Entry | undefined {
      const collection = <PooledResources.Entry[]>this.collectionCache.getCollection(PooledResources.KEY, PooledResources.Entry);
      return collection.find(entry => entry.key === this._toResource);
    }
    
    get uiTransactionInfo(): UiResourceTransactionPooledResourceJunctions.Entry | undefined {
      const collection = <UiResourceTransactionPooledResourceJunctions.Entry[]>this.collectionCache.getCollection(UiResourceTransactionPooledResourceJunctions.KEY, UiResourceTransactionPooledResourceJunctions.Entry);
      return collection.find(entry => entry.key === this._uiTransactionInfo);
    }
  }
}

export default SettlementSiegeActionEffectCostResourceTransactionConversionFactors;
