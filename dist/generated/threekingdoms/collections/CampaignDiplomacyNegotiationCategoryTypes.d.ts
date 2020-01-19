import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyNegotiationCategories } from "./CampaignDiplomacyNegotiationCategories";
import { CampaignGroups } from "./CampaignGroups";
import { CampaignDiplomacyNegotiationTypes } from "./CampaignDiplomacyNegotiationTypes";
export declare namespace CampaignDiplomacyNegotiationCategoryTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _category: string;
        readonly _campaignGroup: string;
        readonly _negotiationType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get category(): CampaignDiplomacyNegotiationCategories.Entry | undefined;
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get negotiationType(): CampaignDiplomacyNegotiationTypes.Entry | undefined;
    }
}
export default CampaignDiplomacyNegotiationCategoryTypes;
