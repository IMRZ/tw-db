import { CollectionCache, CollectionKey } from "../../../common";
import { SettlementSiegeActionEffectGroups } from "./SettlementSiegeActionEffectGroups";
import { ResourceTransactions } from "./ResourceTransactions";
import { PooledResourceScopes } from "./PooledResourceScopes";
import { SettlementSiegeActionEffectCostTargets } from "./SettlementSiegeActionEffectCostTargets";
import { SettlementSiegeActionEffectCostResourceTransactionConversions } from "./SettlementSiegeActionEffectCostResourceTransactionConversions";
export declare namespace SettlementSiegeActionEffectCostResourceTransactions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
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
        constructor(collectionCache: CollectionCache, values: any);
        get effectGroup(): SettlementSiegeActionEffectGroups.Entry | undefined;
        get requiredTransaction(): ResourceTransactions.Entry | undefined;
        get requiredTransactionScope(): PooledResourceScopes.Entry | undefined;
        get requiredTransactionTarget(): SettlementSiegeActionEffectCostTargets.Entry | undefined;
        get appliedTransaction(): ResourceTransactions.Entry | undefined;
        get appliedTransactionScope(): PooledResourceScopes.Entry | undefined;
        get appliedTransactionTarget(): SettlementSiegeActionEffectCostTargets.Entry | undefined;
        get appliedTransactionTreasuryConversion(): SettlementSiegeActionEffectCostResourceTransactionConversions.Entry | undefined;
        get appliedTransactionTreasuryConversionTarget(): SettlementSiegeActionEffectCostTargets.Entry | undefined;
    }
}
export default SettlementSiegeActionEffectCostResourceTransactions;
