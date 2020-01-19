import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignDiplomacyVoteFilters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly filter: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignDiplomacyVoteFilters;
