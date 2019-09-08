import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsCommodity } from "./CampaignBonusValueIdsCommodity";
import { Commodities } from "./Commodities";
export declare namespace EffectBonusValueCommodityJunction {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _commodity: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effect: Effects.Entry | undefined;
        readonly bonusValueId: CampaignBonusValueIdsCommodity.Entry | undefined;
        readonly commodity: Commodities.Entry | undefined;
    }
}
export default EffectBonusValueCommodityJunction;
