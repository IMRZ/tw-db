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
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsLoyaltyEvents.Entry | undefined;
        get loyalltyEvent(): LoyaltyEventEffects.Entry | undefined;
    }
}
export default EffectBonusValueLoyaltyEventJunctions;
