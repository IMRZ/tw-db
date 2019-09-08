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
        readonly effect: Effects.Entry | undefined;
        readonly bonusValueId: CampaignBonusValueIdsRituals.Entry | undefined;
        readonly ritual: Rituals.Entry | undefined;
    }
}
export default EffectBonusValueRitualJunctions;
