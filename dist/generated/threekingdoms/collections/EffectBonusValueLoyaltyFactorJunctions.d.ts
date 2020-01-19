import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsLoyaltyFactors } from "./CampaignBonusValueIdsLoyaltyFactors";
import { LoyaltyFactors } from "./LoyaltyFactors";
export declare namespace EffectBonusValueLoyaltyFactorJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _loyaltyFactor: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsLoyaltyFactors.Entry | undefined;
        get loyaltyFactor(): LoyaltyFactors.Entry | undefined;
    }
}
export default EffectBonusValueLoyaltyFactorJunctions;
