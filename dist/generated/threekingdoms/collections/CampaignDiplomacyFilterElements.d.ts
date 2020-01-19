import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyFilters } from "./CampaignDiplomacyFilters";
import { CampaignDiplomacyFilterSources } from "./CampaignDiplomacyFilterSources";
export declare namespace CampaignDiplomacyFilterElements {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _filter: string;
        readonly _source: string;
        readonly _criteria: any;
        constructor(collectionCache: CollectionCache, values: any);
        get filter(): CampaignDiplomacyFilters.Entry | undefined;
        get source(): CampaignDiplomacyFilterSources.Entry | undefined;
    }
}
export default CampaignDiplomacyFilterElements;
