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
        readonly effect: Effects.Entry | undefined;
        readonly bonusValueId: CampaignBonusValueIdsSiegeItems.Entry | undefined;
        readonly siegeItem: BattlefieldDeployableSiegeItems.Entry | undefined;
    }
}
export default EffectBonusValueSiegeItemJunctions;
