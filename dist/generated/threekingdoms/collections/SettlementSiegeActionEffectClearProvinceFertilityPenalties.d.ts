import { CollectionCache, CollectionKey } from "../../../common";
import { SettlementSiegeActionEffectGroups } from "./SettlementSiegeActionEffectGroups";
export declare namespace SettlementSiegeActionEffectClearProvinceFertilityPenalties {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effectGroup: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effectGroup(): SettlementSiegeActionEffectGroups.Entry | undefined;
    }
}
export default SettlementSiegeActionEffectClearProvinceFertilityPenalties;
