import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyAvailabilityReasons } from "./CampaignDiplomacyTreatyAvailabilityReasons";
export declare namespace CampaignDiplomacyTreatyRequirements {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _reason: string;
        readonly proposerRequiresAvailableTradeRouteSlot: boolean;
        readonly recipientRequiresAvailableTradeRouteSlot: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get reason(): CampaignDiplomacyTreatyAvailabilityReasons.Entry | undefined;
    }
}
export default CampaignDiplomacyTreatyRequirements;
