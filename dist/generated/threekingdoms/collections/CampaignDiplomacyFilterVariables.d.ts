import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyFilters } from "./CampaignDiplomacyFilters";
import { CampaignDiplomacyVariableSources } from "./CampaignDiplomacyVariableSources";
import { CampaignDiplomacyVariables } from "./CampaignDiplomacyVariables";
export declare namespace CampaignDiplomacyFilterVariables {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _filter: string;
        readonly _source: string;
        readonly _variable: string;
        constructor(collectionCache: CollectionCache, values: any);
        get filter(): CampaignDiplomacyFilters.Entry | undefined;
        get source(): CampaignDiplomacyVariableSources.Entry | undefined;
        get variable(): CampaignDiplomacyVariables.Entry | undefined;
    }
}
export default CampaignDiplomacyFilterVariables;
