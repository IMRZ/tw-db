import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyAvailabilityReasons } from "./CampaignDiplomacyTreatyAvailabilityReasons";
export declare namespace CampaignDiplomacyConfederationAvailabilityReasons {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly confederationReason: string;
        readonly _reason: string;
        constructor(collectionCache: CollectionCache, values: any);
        get reason(): CampaignDiplomacyTreatyAvailabilityReasons.Entry | undefined;
    }
}
export default CampaignDiplomacyConfederationAvailabilityReasons;
