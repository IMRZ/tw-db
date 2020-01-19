import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyAvailabilityReasons } from "./CampaignDiplomacyTreatyAvailabilityReasons";
export declare namespace CampaignDiplomacyTreatyComponentMaximumProposableGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly group: string;
        readonly maximumNumberOfComponentsProposable: number;
        readonly _reasonIfReachedMaximumProposable: string;
        constructor(collectionCache: CollectionCache, values: any);
        get reasonIfReachedMaximumProposable(): CampaignDiplomacyTreatyAvailabilityReasons.Entry | undefined;
    }
}
export default CampaignDiplomacyTreatyComponentMaximumProposableGroups;
