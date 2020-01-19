import { CollectionCache, CollectionKey } from "../../../common";
import { SettlementSiegeActionEffectGroups } from "./SettlementSiegeActionEffectGroups";
export declare namespace SettlementSiegeActionEffectPublicOrderEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effectGroup: string;
        readonly resistanceToOccupationSameStateReligion: number;
        readonly resistanceToOccupationDifferentStateReligion: number;
        readonly conquestPenalty: number;
        readonly banditryPenalty: number;
        constructor(collectionCache: CollectionCache, values: any);
        get effectGroup(): SettlementSiegeActionEffectGroups.Entry | undefined;
    }
}
export default SettlementSiegeActionEffectPublicOrderEffects;
