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
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsFactions.Entry | undefined;
        get faction(): Factions.Entry | undefined;
    }
}
export default EffectBonusValueFactionJunctions;
