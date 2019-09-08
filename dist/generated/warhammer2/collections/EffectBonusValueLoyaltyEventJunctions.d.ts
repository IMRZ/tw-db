import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsLoyaltyEvents } from "./CampaignBonusValueIdsLoyaltyEvents";
import { LoyaltyEventEffects } from "./LoyaltyEventEffects";
export declare namespace EffectBonusValueLoyaltyEventJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _loyalltyEvent: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effect: Effects.Entry | undefined;
        readonly bonusValueId: CampaignBonusValueIdsLoyaltyEvents.Entry | undefined;
        readonly loyalltyEvent: LoyaltyEventEffects.Entry | undefined;
    }
}
export default EffectBonusValueLoyaltyEventJunctions;
