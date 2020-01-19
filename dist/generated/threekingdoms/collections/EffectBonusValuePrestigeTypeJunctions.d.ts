import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsPrestigeTypes } from "./CampaignBonusValueIdsPrestigeTypes";
import { PrestigeTypes } from "./PrestigeTypes";
export declare namespace EffectBonusValuePrestigeTypeJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _prestigeType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsPrestigeTypes.Entry | undefined;
        get prestigeType(): PrestigeTypes.Entry | undefined;
    }
}
export default EffectBonusValuePrestigeTypeJunctions;
