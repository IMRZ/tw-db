import { CollectionCache, CollectionKey } from "../../../common";
import { SettlementSiegeActionEffectCostResourceTransactionConversions } from "./SettlementSiegeActionEffectCostResourceTransactionConversions";
import { PooledResourceFactors } from "./PooledResourceFactors";
import { PooledResourceScopes } from "./PooledResourceScopes";
import { PooledResources } from "./PooledResources";
import { UiResourceTransactionPooledResourceJunctions } from "./UiResourceTransactionPooledResourceJunctions";
export declare namespace SettlementSiegeActionEffectCostResourceTransactionConversionFactors {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _conversion: string;
        readonly _fromFactor: string;
        readonly _toFactor: string;
        readonly rate: number;
        readonly _scope: string;
        readonly _toResource: string;
        readonly _uiTransactionInfo: string;
        constructor(collectionCache: CollectionCache, values: any);
        get conversion(): SettlementSiegeActionEffectCostResourceTransactionConversions.Entry | undefined;
        get fromFactor(): PooledResourceFactors.Entry | undefined;
        get toFactor(): PooledResourceFactors.Entry | undefined;
        get scope(): PooledResourceScopes.Entry | undefined;
        get toResource(): PooledResources.Entry | undefined;
        get uiTransactionInfo(): UiResourceTransactionPooledResourceJunctions.Entry | undefined;
    }
}
export default SettlementSiegeActionEffectCostResourceTransactionConversionFactors;
