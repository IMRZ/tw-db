import { CollectionCache, CollectionKey } from "../../../common";
import { SettlementSiegeActionEffectGroups } from "./SettlementSiegeActionEffectGroups";
export declare namespace SettlementSiegeActionEffectLootAndDamageBuildings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effectGroup: string;
        readonly baseLootValue: number;
        readonly buildingDamagePercentage: number;
        readonly buildingDamageSpreadPercentage: number;
        readonly buildingLootModifierPercentage: number;
        readonly totalLootModifierPercentage: number;
        constructor(collectionCache: CollectionCache, values: any);
        get effectGroup(): SettlementSiegeActionEffectGroups.Entry | undefined;
    }
}
export default SettlementSiegeActionEffectLootAndDamageBuildings;
