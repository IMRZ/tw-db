import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignDiplomacySelectionFilters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly selection: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignDiplomacySelectionFilters;
