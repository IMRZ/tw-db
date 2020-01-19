import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CampaignDiplomacyExistingComponents } from "./CampaignDiplomacyExistingComponents";
import { CampaignDiplomacySelectionFilters } from "./CampaignDiplomacySelectionFilters";
import { CampaignDiplomacyTreatyComponentRemovalTypes } from "./CampaignDiplomacyTreatyComponentRemovalTypes";
export declare namespace CampaignDiplomacyTreatyComponentRemovalRequiredTreaties {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _component: string;
        readonly _requirement: string;
        readonly generationPriority: number;
        readonly applicationPriority: number;
        readonly _proposerSelectionFilter: string;
        readonly _recipientSelectionFilter: string;
        readonly _removalType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get component(): CampaignDiplomacyTreatyComponents.Entry | undefined;
        get requirement(): CampaignDiplomacyExistingComponents.Entry | undefined;
        get proposerSelectionFilter(): CampaignDiplomacySelectionFilters.Entry | undefined;
        get recipientSelectionFilter(): CampaignDiplomacySelectionFilters.Entry | undefined;
        get removalType(): CampaignDiplomacyTreatyComponentRemovalTypes.Entry | undefined;
    }
}
export default CampaignDiplomacyTreatyComponentRemovalRequiredTreaties;
