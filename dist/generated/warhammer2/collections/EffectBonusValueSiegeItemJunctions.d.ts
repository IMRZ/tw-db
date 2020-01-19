import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsSiegeItems } from "./CampaignBonusValueIdsSiegeItems";
import { BattlefieldDeployableSiegeItems } from "./BattlefieldDeployableSiegeItems";
export declare namespace EffectBonusValueSiegeItemJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _siegeItem: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsSiegeItems.Entry | undefined;
        get siegeItem(): BattlefieldDeployableSiegeItems.Entry | undefined;
    }
}
export default EffectBonusValueSiegeItemJunctions;
