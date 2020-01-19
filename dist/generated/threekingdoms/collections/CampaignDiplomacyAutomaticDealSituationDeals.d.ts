import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticDealSituations } from "./CampaignDiplomacyAutomaticDealSituations";
import { CampaignDiplomacyAutomaticDeals } from "./CampaignDiplomacyAutomaticDeals";
export declare namespace CampaignDiplomacyAutomaticDealSituationDeals {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _situation: string;
        readonly _deal: string;
        constructor(collectionCache: CollectionCache, values: any);
        get situation(): CampaignDiplomacyAutomaticDealSituations.Entry | undefined;
        get deal(): CampaignDiplomacyAutomaticDeals.Entry | undefined;
    }
}
export default CampaignDiplomacyAutomaticDealSituationDeals;
