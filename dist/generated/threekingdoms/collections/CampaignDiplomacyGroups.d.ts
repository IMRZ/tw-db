import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyGroupTypes } from "./CampaignDiplomacyGroupTypes";
import { CampaignDiplomacyTreatyAvailabilityReasons } from "./CampaignDiplomacyTreatyAvailabilityReasons";
export declare namespace CampaignDiplomacyGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _type: string;
        readonly _reason: string;
        constructor(collectionCache: CollectionCache, values: any);
        get type(): CampaignDiplomacyGroupTypes.Entry | undefined;
        get reason(): CampaignDiplomacyTreatyAvailabilityReasons.Entry | undefined;
    }
}
export default CampaignDiplomacyGroups;
