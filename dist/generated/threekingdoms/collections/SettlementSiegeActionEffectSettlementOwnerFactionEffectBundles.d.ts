import { CollectionCache, CollectionKey } from "../../../common";
import { SettlementSiegeActionEffectGroups } from "./SettlementSiegeActionEffectGroups";
import { EffectBundles } from "./EffectBundles";
export declare namespace SettlementSiegeActionEffectSettlementOwnerFactionEffectBundles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effectGroup: string;
        readonly _effectBundle: string;
        readonly turns: number;
        constructor(collectionCache: CollectionCache, values: any);
        get effectGroup(): SettlementSiegeActionEffectGroups.Entry | undefined;
        get effectBundle(): EffectBundles.Entry | undefined;
    }
}
export default SettlementSiegeActionEffectSettlementOwnerFactionEffectBundles;
