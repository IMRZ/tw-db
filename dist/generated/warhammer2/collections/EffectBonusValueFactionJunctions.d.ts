import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsFactions } from "./CampaignBonusValueIdsFactions";
import { Factions } from "./Factions";
export declare namespace EffectBonusValueFactionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _faction: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effect: Effects.Entry | undefined;
        readonly bonusValueId: CampaignBonusValueIdsFactions.Entry | undefined;
        readonly faction: Factions.Entry | undefined;
    }
}
export default EffectBonusValueFactionJunctions;
