import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignDiplomacyTreatyAvailabilityReasons {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly description: string;
        readonly priority: number;
        readonly hideInUi: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignDiplomacyTreatyAvailabilityReasons;
