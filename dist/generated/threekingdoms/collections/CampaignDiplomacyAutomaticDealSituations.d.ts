import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignDiplomacyAutomaticDealSituations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly situation: string;
        readonly comments: string;
        readonly description: string;
        readonly icon: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignDiplomacyAutomaticDealSituations;
