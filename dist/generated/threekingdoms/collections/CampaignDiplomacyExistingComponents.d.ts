import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CampaignDiplomacyFilters } from "./CampaignDiplomacyFilters";
export declare namespace CampaignDiplomacyExistingComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _component: string;
        readonly _filter: string;
        constructor(collectionCache: CollectionCache, values: any);
        get component(): CampaignDiplomacyTreatyComponents.Entry | undefined;
        get filter(): CampaignDiplomacyFilters.Entry | undefined;
    }
}
export default CampaignDiplomacyExistingComponents;
