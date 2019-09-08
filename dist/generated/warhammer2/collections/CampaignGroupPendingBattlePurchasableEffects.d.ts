import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { PurchasableEffects } from "./PurchasableEffects";
export declare namespace CampaignGroupPendingBattlePurchasableEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _purchasableEffect: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly campaignGroup: CampaignGroups.Entry | undefined;
        readonly purchasableEffect: PurchasableEffects.Entry | undefined;
    }
}
export default CampaignGroupPendingBattlePurchasableEffects;
