import { CollectionCache, CollectionKey } from "../../../common";
import { SettlementSiegeActionEffects } from "./SettlementSiegeActionEffects";
import { SettlementSiegeActionEffectApplicationStages } from "./SettlementSiegeActionEffectApplicationStages";
import { SettlementSiegeActionEffectGroups } from "./SettlementSiegeActionEffectGroups";
export declare namespace SettlementSiegeActionEffectGroupEffectApplicationStages {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _applicationStage: string;
        readonly _effectGroup: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): SettlementSiegeActionEffects.Entry | undefined;
        get applicationStage(): SettlementSiegeActionEffectApplicationStages.Entry | undefined;
        get effectGroup(): SettlementSiegeActionEffectGroups.Entry | undefined;
    }
}
export default SettlementSiegeActionEffectGroupEffectApplicationStages;
