import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { Dilemmas } from "./Dilemmas";
export declare namespace CampaignGroupLoyaltyDilemmas {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _dilemma: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly campaignGroup: CampaignGroups.Entry | undefined;
        readonly dilemma: Dilemmas.Entry | undefined;
    }
}
export default CampaignGroupLoyaltyDilemmas;
