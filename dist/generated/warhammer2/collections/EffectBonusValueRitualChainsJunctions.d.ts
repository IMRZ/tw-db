import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsRitualChains } from "./CampaignBonusValueIdsRitualChains";
import { RitualChains } from "./RitualChains";
export declare namespace EffectBonusValueRitualChainsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _ritualChain: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsRitualChains.Entry | undefined;
        get ritualChain(): RitualChains.Entry | undefined;
    }
}
export default EffectBonusValueRitualChainsJunctions;
