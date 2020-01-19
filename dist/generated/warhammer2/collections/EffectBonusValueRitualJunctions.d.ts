import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsRituals } from "./CampaignBonusValueIdsRituals";
import { Rituals } from "./Rituals";
export declare namespace EffectBonusValueRitualJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _ritual: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsRituals.Entry | undefined;
        get ritual(): Rituals.Entry | undefined;
    }
}
export default EffectBonusValueRitualJunctions;
