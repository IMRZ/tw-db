import { CollectionCache, CollectionKey } from "../../../common";
import { SettlementSiegeActionEffectGroups } from "./SettlementSiegeActionEffectGroups";
export declare namespace SettlementSiegeActionEffectFactionSupports {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly factionSupportValue: number;
        readonly _effectGroupRecord: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effectGroupRecord(): SettlementSiegeActionEffectGroups.Entry | undefined;
    }
}
export default SettlementSiegeActionEffectFactionSupports;
